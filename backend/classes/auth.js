const database = require("../database");
const jwt = require("jsonwebtoken");

require("dotenv").config();

class Auth {
  authenticateToken(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    console.log(authHeader);
    console.log(token);

    if (token === undefined) {
      return false;
    }

    let payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (payload.userId) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Auth;
