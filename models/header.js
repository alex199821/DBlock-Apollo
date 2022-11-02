const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  about: String,
  video: String,
});

module.exports = mongoose.model("Header", schema);
