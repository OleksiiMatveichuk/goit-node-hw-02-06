const express = require("express");
const ctrl = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { addSchema, updateFavorite } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.put("/:contactId", validateBody(addSchema), ctrl.updateContact);

router.delete("/:contactId", ctrl.deleteContact);

router.patch(
  "/:contactId/favorite",
  validateBody(updateFavorite),
  ctrl.updateFavorite
);

module.exports = router;
