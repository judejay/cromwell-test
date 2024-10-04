require("dotenv").config();

const CONFIG = {
  nodeEnv: process.env.NODE_ENV ?? "dev",
  port: process.env.PORT ?? 3000,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { CONFIG };
