const mongoose = require("mongoose");
const logger = require("../utils/logger");
require("dotenv").config();

// let MONGODB_URI =
//   "mongodb+srv://sasha616:adoado11@cluster0.noubwd2.mongodb.net/dblock?retryWrites=true&w=majority";
const MONGODB_URI = process.env.MONGODB_URI;

logger.info("connecting to", MONGODB_URI);

const connectDB = () => {
  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
      logger.info("connected to MongoDB");
    })
    .catch((error) => {
      logger.error("error connection to MongoDB:", error.message);
    });
};

module.exports = connectDB;
