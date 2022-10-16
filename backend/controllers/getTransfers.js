const Transfers = require("../classes/getTransfers");

const getTransfers = async (req, res) => {
  const tr = new Transfers();
  const result = await tr.getTransfers(req, res);

  if (result === false) {
    res.status(400).json({ message: "No transfers" });
  } else {
    res.status(200).json(result);
  }
};

module.exports = { getTransfers };
