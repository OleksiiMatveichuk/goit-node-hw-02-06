const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST, port } = require("./src/configs/envConfig");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(port);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
