require("dotenv").config();

const CONFIG = {
  nodeEnv: process.env.NODE_ENV ?? "dev",
  port: process.env.PORT ?? 3000,
  db_Url: process.env.DATABASE_URL,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  dialect: "postgres",
  seederStorage: "sequelize",
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = CONFIG;
