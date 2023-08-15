const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password wrong");
  }

  const token = "000000000000000000";

  res.json({
    token,
  });
};

module.exports = login;
