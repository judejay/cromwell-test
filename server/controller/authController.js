const userService = require("../services/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CONFIG = require("../appConfig.js");
const AppError = require("../utils/appError");

const generateToken = (payload) => {
  return jwt.sign(payload, CONFIG.JWT_SECRET_KEY, {
    expiresIn: CONFIG.JWT_EXPIRES_IN,
  });
};
const signup = async (req, res, next) => {
  try {
    const result = await userService.signup(req);

    if (result) {
      return res.status(201).json({
        status: "success",
        message: "Signup successful",
      });
    }
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  try {
    const result = await userService.login(email);

    if (!result || !(await bcrypt.compare(password, result.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }
    delete result.password;

    const token = generateToken({
      id: result.id,
    });

    if (result) {
      return res.status(200).json({
        status: "success",
        message: "Login successful",
        token: token,
        data: {
          firstName: result.firstName,
          lastName: result.lastName,
        },
      });
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { signup, login };
