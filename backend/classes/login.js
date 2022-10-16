const database = require("../database");

class UserLogin {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  async CheckIfUserExists() {
    console.log(this.login, this.password);
    const query = `SELECT * FROM users WHERE login = '${this.login}' AND password = '${this.password}'`;
    const result = await database.query(query);

    if (result.rows[0]) {
      return true;
    } else {
      return false;
    }
  }

  async GetUserId() {
    const query = `SELECT id FROM users WHERE login = '${this.login}' AND password = '${this.password}'`;
    const result = await database.query(query);

    if (result.rows[0].id) {
      return result.rows[0].id;
    } else {
      return null;
    }
  }
}

module.exports = UserLogin;
