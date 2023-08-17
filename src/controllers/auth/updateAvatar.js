const fs = require("fs").promises;
const path = require("path");
const jimp = require("jimp");

const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id);
  if (!user) {
    throw HttpError(401, "Not authorized");
  }

  const { path: tempUpload, originalname } = req.file;
  const extention = originalname.split(".").pop();
  const filename = `${_id}.${extention}`;

  const img = await jimp.read(tempUpload);
  await img
    .autocrop()
    .cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE)
    .writeAsync(tempUpload);

  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.json({
    avatarUrl,
  });
};

module.exports = updateAvatar;
