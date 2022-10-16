const database = require("../database");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const getAllTransfers = async (req, res) => {
  const accessToken = req.headers["authorization"].split(" ")[1];
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  console.log(decoded);

  if (decoded.Login) {
    const query = "SELECT * FROM TRANSFERS";
    const transfers = await database.query(query);

    res.json(transfers.rows);
  } else {
    res.json({ message: "You are not logged in" });
  }
};

module.exports = {
  getAllTransfers,
};
