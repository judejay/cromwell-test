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
  //console.log(result);
  //console.log("result");
  if (!result || !(await bcrypt.compare(password, result.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = generateToken({
    id: result.id,
  });
  console.log("token", token);

  return res.json({
    status: "success",
    token,
  });
};

const signup = async (req, res, next) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  const newUser = await user.create({
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
  });

  const result = newUser.toJSON();
  delete result.password;
  const generateToken = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

  result.token = generateToken({ id: result.id });

  if (!result) {
    return res.status(400).json({
      status: "fail",
      message: "Signup failed",
    });
  }
  return res.status(201).json({
    status: "success",
    message: "Signup successful",
    data: result,
  });
};

module.exports = { signup, login };
