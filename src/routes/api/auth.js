const express = require("express");
const ctrl = require("../../controllers");
const { validateBody, authenticate, upload } = require("../../middlewares");
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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

module.exports = router;
