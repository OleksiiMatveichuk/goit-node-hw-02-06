const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const register = async (req, res) => {
  const { email, subscription, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPasswords = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    subscription,
    password: hashPasswords,
    avatarURL,
  });
  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
