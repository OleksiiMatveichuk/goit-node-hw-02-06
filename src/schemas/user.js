const Joi = require("joi");

const RegExp = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$/;
const subscriptions = ["starter", "pro", "business"];

const registetSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(RegExp).required(),
  // subscription: {
  //   type: String,
  //   enum: ["starter", "pro", "business"],
  //   default: "starter",
  // },
  // token: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(RegExp).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptions)
    .required(),
});

module.exports = {
  registetSchema,
  loginSchema,
  subscriptionSchema,
};
