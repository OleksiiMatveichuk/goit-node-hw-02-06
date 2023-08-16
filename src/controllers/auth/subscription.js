const { User } = require("../../models/user");

const subscription = async (req, res) => {
  const { _id } = req.params;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  res.json(user);
};

module.exports = subscription;
