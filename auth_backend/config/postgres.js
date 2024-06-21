const postgres = require("postgres");

const sql = postgres({
  host: "afizfairuz", 
  port: 5432, 
  database: "auth_backend", 
  username: "postgres", 
  password: "afizfairuz87", 
});

module.exports = sql;
