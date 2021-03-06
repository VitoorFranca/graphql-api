const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_DATABASE_URI;
console.log(`Connecting to ${url}`);

const connection = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
