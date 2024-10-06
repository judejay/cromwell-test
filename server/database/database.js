const { Sequelize } = require("sequelize");
const CONFIG = require("../config");
const config = require("../config/config");
const env = CONFIG.nodeEnv || "development";

const sequelize = new Sequelize(config[env]);

module.exports = sequelize;
