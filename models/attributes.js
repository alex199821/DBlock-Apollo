const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  link: String,
  description: String,
});

module.exports = mongoose.model("Attribute", schema);
