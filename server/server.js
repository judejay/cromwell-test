const { CONFIG } = require("./config");
const express = require("express");
const { sequelize } = require("./database/database");
const authRouter = require("./route/authRoute");
const app = express();
app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
const PORT = parseInt(CONFIG.port) || 3000;
const NODE_ENV = CONFIG.nodeEnv || "dev";
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "banana"] });
});

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `in ${NODE_ENV}`);
});
