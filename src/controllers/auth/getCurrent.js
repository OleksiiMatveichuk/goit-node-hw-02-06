const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const getCurrent = async (req, res) => {
  const { email } = req.user;

  const user = await User.findOne(email);
  if (!user) {
    throw HttpError(401, "Not authorized");
  }

  res.status(200).json({
    email,
    subscription: user.subscription,
  });
};

module.exports = getCurrent;
