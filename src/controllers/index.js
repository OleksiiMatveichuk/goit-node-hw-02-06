const getAll = require("./contacts/getAll");
const getById = require("./contacts/getById");
const addContact = require("./contacts/addContact");
const updateContact = require("./contacts/updateContact");
const deleteContact = require("./contacts/deleteContact");
const updateFavorite = require("./contacts/updateFavorite");
const getFavorite = require("./contacts/getFavorite");

const { ctrlWrapper } = require("../helpers");

const register = require("./auth/register");
const login = require("./auth/login");
const logout = require("./auth/logout");
const getCurrent = require("./auth/getCurrent");
const subscription = require("./auth/subscription");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateFavorite: ctrlWrapper(updateFavorite),
  getFavorite: ctrlWrapper(getFavorite),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  subscription: ctrlWrapper(subscription),
};
