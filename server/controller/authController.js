const userService = require("../services/user.js");

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
  try {
    const result = await userService.login(req);

    if (result) {
      return res.status(200).json({
        status: "success",
        message: "Login successful",
        token: result,
      });
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { signup, login };
