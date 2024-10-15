const { signup } = require("../controller/authController");
const { login } = require("../services/user");
const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
