const { Contact } = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteContact;
