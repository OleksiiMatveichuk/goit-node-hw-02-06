const getAll = require("./getAll");
const getById = require("./getById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const deleteContact = require("./deleteContact");
const updateFavorite = require("./updateFavorite");
const { ctrlWrapper } = require("../helpers");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
