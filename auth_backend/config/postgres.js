const postgres = require("postgres");

const connection = postgres({
  host: "localhost",
  port: 5432,
  database: "auth_backend",
  username: "postgres",
  password: "afizfairuz87",
});

module.exports = connection;
