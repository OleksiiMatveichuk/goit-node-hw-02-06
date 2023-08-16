require("dotenv").config();

const { PORT = 3000, DB_HOST } = process.env;

module.exports = {
  port: Number(PORT),
  DB_HOST,
};
