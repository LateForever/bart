const jwt = require("jsonwebtoken");
const database = require("../database");

class Transfers {
  async getTransfers(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === undefined) {
      return false;
    }

    let payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (payload.userId) {
      const query = `SELECT * FROM transfers WHERE from_id = ${payload.userId}`;
      const result = await database.query(query);

      if (result.rows) {
        return result.rows;
      } else {
        return false;
      }
    }
  }
}

module.exports = Transfers;
