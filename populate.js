const connectDB = require("./db/connect");

//Models for population of data
const Header = require("./models/header");
const Attribute = require("./models/attributes");
const Contacts = require("./models/contacts");
const Form = require("./models/form");
//Data for population
const jsonHeader = require("./populateData/header.json");
const jsonAttribute = require("./populateData/attribute.json");
const jsonContacts = require("./populateData/contact.json");
const jsonForm = require("./populateData/form.json");
const start = async () => {
  try {
    await connectDB();
    await Form.deleteMany();
    await Form.create(jsonForm);
    console.log("Data Populated Succesfully!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
