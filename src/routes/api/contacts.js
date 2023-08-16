const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { addSchema, updateFavorite } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, ctrl.getById);

router.post("/", authenticate, validateBody(addSchema), ctrl.addContact);

router.put(
  "/:contactId",
  authenticate,
  validateBody(addSchema),
  ctrl.updateContact
);

router.delete("/:contactId", authenticate, ctrl.deleteContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(updateFavorite),
  ctrl.updateFavorite
);

module.exports = router;
