const CONFIG = require("../appConfig");

module.exports = {
  development: {
    username: CONFIG.username,
    password: null,
    database: CONFIG.database,
    host: CONFIG.db_host,
    dialect: CONFIG.dialect,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
