const Header = require("./models/header");
const Attribute = require("./models/attributes");
const Contacts = require("./models/contacts");
const Form = require("./models/form");
const User = require("./models/user");
const resolvers = {
  Query: {
    headerInfo: async (root, args) => {
      let header = await Header.find({});
      return header[0];
    },
    allAttributes: async (root, args) => {
      let attribute = await Attribute.find({});
      return attribute;
    },
    contactInfo: async (root, args) => {
      let contacts = await Contacts.find({});
      return contacts[0];
    },
    videoSource: async (root, args) => {
      let videoSource = await Header.find({});
      return videoSource[0];
    },
    addressInfo: async (root, args) => {
      let address = await Contacts.find({});
      return address[0];
    },
    formInfo: async (root, args) => {
      let form = await Form.find({});
      return form[0];
    },
  },
  Mutation: {
    subscribe: async (root, args, context) => {
      let user = new User({ ...args });
      try {
        await user.save();
      } catch (error) {
        console.log(error);
      }
      return user;
    },
  },
};

module.exports = resolvers;
