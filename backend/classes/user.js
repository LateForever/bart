const database = require("../database");
const jwt = require("jsonwebtoken");

class User {
  async getUserData(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === undefined) {
      return false;
    }

    let payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (payload.userId) {
      const query = `SELECT account_number, balance FROM users WHERE id = '${payload.userId}'`;
      const result = await database.query(query);

      if (result.rows[0]) {
        return result.rows[0];
      } else {
        return false;
      }
    }
  }
}

module.exports = User;
