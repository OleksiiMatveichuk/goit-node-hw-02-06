const express = require("express");
const ctrl = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { registetSchema, loginSchema } = require("../../schemas/user");

const router = express.Router();

router.post("/register", validateBody(registetSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

module.exports = router;
