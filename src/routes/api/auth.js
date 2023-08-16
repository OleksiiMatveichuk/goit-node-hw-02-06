const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const {
  registetSchema,
  loginSchema,
  subscriptionSchema,
} = require("../../schemas/user");

const router = express.Router();

router.post("/register", validateBody(registetSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

router.get("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch(
  "/users/:id",
  authenticate,
  validateBody(subscriptionSchema),
  ctrl.subscription
);

module.exports = router;
