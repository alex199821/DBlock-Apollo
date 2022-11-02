const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  singupInfo: String,
  name: { standardName: String, highlightedName: String },
  lastName: {
    standardLastName: String,
    highlightedLastName: String,
  },
  email: String,
  terms: String,
  submitButton: String,
  errorMessage: String,
});

module.exports = mongoose.model("Form", schema);
