const { gql } = require("apollo-server");

const typeDefs = gql`
  type Attribute {
    link: String!
    description: String!
    id: ID!
  }

  type Header {
    name: String!
    about: String!
  }

  type Video {
    video: String!
  }

  type Address {
    address: String!
  }

  type Form {
    singupInfo: String!
    name: Name
    lastName: LastName
    email: String!
    terms: String!
    submitButton: String!
    errorMessage: String!
  }

  type Name {
    standardName: String!
    highlightedName: String!
  }

  type LastName {
    standardLastName: String!
    highlightedLastName: String!
  }

  type Contacts {
    address: String!
    facebookPath: String!
    instagramPath: String!
  }

  type User {
    name: String!
    lastName: String!
    email: String!
  }

  type Query {
    allAttributes: [Attribute!]!
    headerInfo: Header
    contactInfo: Contacts
    videoSource: Video
    formInfo: Form
    addressInfo: Address
  }

  type Mutation {
    subscribe(name: String!, lastName: String!, email: String!): User
  }
`;

module.exports = typeDefs;
