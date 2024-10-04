const signup = async (req, res, next) => {
  // const { email, password } = req.body;
  //  const user = await User.create({ email, password });
  //res.json(user);
  res.json({
    status: "success",
    message: "Signup",
  });
};

module.exports = { signup };
