const getAll = require("./contacts/getAll");
const getById = require("./contacts/getById");
const addContact = require("./contacts/addContact");
const updateContact = require("./contacts/updateContact");
const deleteContact = require("./contacts/deleteContact");
const updateFavorite = require("./contacts/updateFavorite");
const { ctrlWrapper } = require("../helpers");

const register = require("./auth/register");
const login = require("./auth/login");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateFavorite: ctrlWrapper(updateFavorite),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};
