const { Contact } = require("../../models/contacts");

// const getAll = async (req, res) => {
//   const { _id: owner } = req.user;
//   const result = await Contact.find({ owner }).populate(
//     "owner",
//     "email subscription"
//   );
//   res.json(result);
// };

// const paginate = require("mongoose-paginate-v2");

const getAll = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const options = {
    page,
    limit,
    sort: { email: 1 },
  };

  const result = await Contact.paginate({}, options);
  res.json(result);
};

module.exports = getAll;
