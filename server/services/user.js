const user = require("../db/models/user");

const login = async (email) => {
  return (result = await user.findOne({ where: { email } }));
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
