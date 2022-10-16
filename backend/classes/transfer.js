const database = require("../database");
const jwt = require("jsonwebtoken");

class Transfer {
  constructor(description, accountNumber, amount, currency, countryTransfer) {
    this.description = description;
    this.accountNumber = accountNumber;
    this.amount = amount;
    this.currency = currency;
    this.countryTransfer = countryTransfer;
  }

  async transfer(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == undefined) {
      return false;
    }

    let payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const userId = payload.userId;

    const query = `SELECT account_number, balance FROM users WHERE account_number = '${this.accountNumber}'`;
    const result = await database.query(query);
    console.log(result.rows[0].account_number);
    if (result.rows[0].account_number) {
      const insertMoney = `UPDATE users SET balance = balance + ${this.amount} WHERE account_number = '${this.accountNumber}'`;
      const insertMoneyResult = await database.query(insertMoney);

      const takeMoneyFromAccount = `UPDATE users SET balance = balance - ${this.amount} WHERE id = '${userId}'`;
      const takeMoneyFromAccountResult = await database.query(
        takeMoneyFromAccount
      );

      const insertTransfer = `INSERT INTO transfers (ammount, currency, national, from_id, to_account, bank_id, transfer_date, transfer_title)
        VALUES (${this.amount}, '${this.currency}', ${this.countryTransfer}, ${userId}, '${this.accountNumber}', 1, CURRENT_DATE, '${this.description}')`;

      const insertTransferResult = await database.query(insertTransfer);

      console.log(insertMoneyResult);
      console.log(takeMoneyFromAccountResult);
      console.log(insertTransferResult);

      return { message: "Transfer done" };
    } else {
      return { message: "Invalid account number" };
    }
  }
}

module.exports = Transfer;
