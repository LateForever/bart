const jwt = require("jsonwebtoken");
const database = require("../database");

require("dotenv").config();

const adminLogin = async (req, res) => {
  const { Login, Password } = req.body;

  const admin = await database.query(
    `SELECT * FROM admin WHERE Login = '${Login}' AND Password = '${Password}'`
  );

  if (admin.rows[0]) {
    const accessToken = jwt.sign(
      { Login: admin.rows[0].login },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({ accessToken });
  } else {
    res.json({ message: "Wrong login or password" });
  }
};

module.exports = {
  adminLogin,
};
