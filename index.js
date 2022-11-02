const path = require('path');

const express = require('express');
const app = express();
const cors = require('cors');

const { ApolloServer } = require("apollo-server");
const connectDB = require("./db/connect");
connectDB();
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

app.use(cors());

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  path: '/', 
  app,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
