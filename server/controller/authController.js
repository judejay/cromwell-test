const user = require("../db/models/user");
const jwt = require("jsonwebtoken");

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

module.exports = { signup };
