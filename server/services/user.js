const user = require("../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AppError = require("../utils/appError");
const CONFIG = require("../config");

const generateToken = (payload) => {
  return jwt.sign(payload, CONFIG.JWT_SECRET_KEY, {
    expiresIn: CONFIG.JWT_EXPIRES_IN,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const result = await user.findOne({ where: { email } });
  delete result.password;
  if (!result || !(await bcrypt.compare(password, result.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = generateToken({
    id: result.id,
  });

  return res.json({
    status: "success",
    token,
    data: {
      firstName: result.firstName,
      lastName: result.lastName,
    },
  });
};

const signup = async (req, res, next) => {
  console.log("req.body", req.body);
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  return (newUser = await user.create({
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
  }));
};

module.exports = { signup, login };
