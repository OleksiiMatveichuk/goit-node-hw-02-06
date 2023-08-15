const Joi = require("joi");

const RegExp = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$/;

const registetSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(RegExp).required(),
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(RegExp).required(),
});

module.exports = {
  registetSchema,
  loginSchema,
};
