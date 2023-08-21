const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");

const register = async (req, res) => {
  const { email, subscription, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const verificationToken = nanoid();
  const hashPasswords = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    subscription,
    password: hashPasswords,
    avatarURL,
    verificationToken,
  });

  await result.save();

  const mail = {
    to: email,
    subject: "Підтвердіть  email",
    html: (
      <a
        target="_blanc"
        href={`http://localhost:3000/api/users/verify${verificationToken}`}
      >
        Підтвердіть будь ласка свій email
      </a>
    ),
  };
  await sendEmail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
    verificationToken,
  });
};

module.exports = register;
