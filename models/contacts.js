const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");
const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const result = data.filter((el) => el.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const index = data.findIndex((el) => el.id === contactId);
  if (index === -1) {
    return null;
  }
  data.splice(index, 1);
  await updateContacts(data);
  return data;
};

const addContact = async (body) => {
  const data = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  data.push(newContact);
  await updateContacts(data);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const data = await listContacts();
  const index = data.findIndex((el) => el.id === contactId);
  if (index === -1) {
    return null;
  }
  data[index] = { contactId, ...body };
  await updateContacts(data);
  return data[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
