const Transfer = require("../classes/transfer");

const doTransfer = async (req, res) => {
  const tr = new Transfer(
    req.body.description,
    req.body.accountNumber,
    req.body.amount,
    req.body.currency,
    req.body.countryTransfer
  );

  const result = await tr.transfer(req, res);

  if (result.message === "Transfer done") {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

module.exports = { doTransfer };
