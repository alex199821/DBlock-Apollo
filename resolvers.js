const Header = require("./models/header");
const Attribute = require("./models/attributes");
const Contacts = require("./models/contacts");
const Form = require("./models/form");
const User = require("./models/user");
const resolvers = {
  Query: {
    //Resolver to get header data
    headerInfo: async (root, args) => {
      let header = await Header.find({});
      return header[0];
    },
    //Resolver to get attribute data

    allAttributes: async (root, args) => {
      let attribute = await Attribute.find({});
      return attribute;
    },
    //Resolver to get all contact data

    contactInfo: async (root, args) => {
      let contacts = await Contacts.find({});
      return contacts[0];
    },

    //Resolver to get all source code of video
    videoSource: async (root, args) => {
      let videoSource = await Header.find({});
      return videoSource[0];
    },
    //Resolver to get a single address from contacts database
    addressInfo: async (root, args) => {
      let address = await Contacts.find({});
      return address[0];
    },
    //Resolver to get all form data
    formInfo: async (root, args) => {
      let form = await Form.find({});
      return form[0];
    },
  },
  Mutation: {
    //mutation to add subscribed user to database
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
