const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  address: String,
  facebookPath: String,
  instagramPath: String,
});

module.exports = mongoose.model("Contact", schema);
