const jwt = require("jsonwebtoken");
const UserLogin = require("../classes/login");

require("dotenv").config();

const userLogin = async (req, res) => {
  const { Login, Password } = req.body;

  const login = new UserLogin(Login, Password);
  const result = await login.CheckIfUserExists();

  if (result) {
    const userId = await login.GetUserId();
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
  } else {
    res.json({ message: "Wrong login or password" });
  }
};

module.exports = {
  userLogin,
};
