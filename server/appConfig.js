require("dotenv").config();

const AppCONFIG = {
  client: "http://localhost:5173",
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
  JWT_SECRET_KEY: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};

module.exports = AppCONFIG;
