const { Sequelize } = require("sequelize");
const CONFIG = require("../config");

const sequelize = new Sequelize(
  CONFIG.db_name,
  CONFIG.db_username,
  CONFIG.db_password,
  CONFIG.dialect
);

module.exports = sequelize;
