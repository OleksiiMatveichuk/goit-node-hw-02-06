const express = require("express");
const ctrl = require("../../controllers");
const { validateBody } = require("../../middlewares");
const addSchema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(addSchema), ctrl.updateContact);

module.exports = router;
