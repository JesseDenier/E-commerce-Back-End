// Allows the sequelize library to be used in this file.
const Sequelize = require("sequelize");
// Allows the dotenv module to be used in this file.
require("dotenv").config();

// Creates a repeatable instance with chosen parameters (some hidden) that can be called on later.
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: console.log, // Use console.log as the logging function
    logQueryParameters: true, // Optionally log the parameters for each query
  }
);

// Allows the above created sequelize instance to be called on in other files.
module.exports = sequelize;
