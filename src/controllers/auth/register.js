const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, subscription, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPasswords = await bcrypt.hash(password, 10);

  const result = await User.create({
    email,
    subscription,
    password: hashPasswords,
  });
  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
