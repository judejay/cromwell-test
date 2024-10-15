const AppCONFIG = require("./appConfig");
const express = require("express");
const authRouter = require("./route/authRoute");

const app = express();
app.use(express.json());
const cors = require("cors");
const corsOptions = {
  origin: AppCONFIG.client,
  optionsSuccessStatus: 200,
};
const PORT = parseInt(AppCONFIG.port) || 3000;
const NODE_ENV = AppCONFIG.nodeEnv || "dev";

app.use(cors(corsOptions));

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `in ${NODE_ENV}`);
});
