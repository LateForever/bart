const database = require("../database");
const nodemailer = require("nodemailer");
const sha256 = require("js-sha256");

class RegisterUser {
  constructor(
    birthDate,
    email,
    firstName,
    lastName,
    age,
    living_address,
    living_city,
    living_postal_code
  ) {
    this.birthDate = birthDate;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.living_address = living_address;
    this.living_city = living_city;
    this.living_postal_code = living_postal_code;
  }

  async createUser() {
    const query = `INSERT INTO clients(name, surname, age, birthdate, living_address, living_city, living_postcode, email) values(
        '${this.firstName}', 
        '${this.lastName}',
        '${this.age}',
        '${this.birthDate}',
        '${this.living_address}',
        '${this.living_city}',
        '${this.living_postal_code}',
        '${this.email}'
    )`;

    const result = await database.query(query);

    if (result.rowCount > 0) {
      return true;
    } else {
      return false;
    }
  }

  async createAccount() {
    const loginPossibilities = "1234567890";
    const passwordPossibilities = "1234567890abcdefghijklmnopqrstuvwxyz";

    let login = "";
    let password = "";
    let accountNumber = "";

    for (let i = 0; i < 20; i++) {
      login +=
        loginPossibilities[
          Math.floor(Math.random() * loginPossibilities.length)
        ];
    }

    for (let i = 0; i < 15; i++) {
      password +=
        passwordPossibilities[
          Math.floor(Math.random() * passwordPossibilities.length)
        ];
    }

    const query = `SELECT id FROM clients WHERE email = '${this.email}' AND name = '${this.firstName}' AND surname = '${this.lastName}'`;
    const result = await database.query(query);

    const id = result.rows[0].id;

    for (let i = 0; i < 16; i++) {
      accountNumber +=
        loginPossibilities[
          Math.floor(Math.random() * loginPossibilities.length)
        ];
    }

    const loginSalt =
      "812883901290d902hj90hr09h901h9803rh8903h809rfh89h8791ghf89071g98f7";
    const passwordSalt =
      "182h8dfh89021h8f901h80r9fgh207892g7983gfb097832gb1798fg34b27890fg24798";

    const hashedLogin = sha256(login + loginSalt);
    const hashedPassword = sha256(password + passwordSalt);

    accountNumber = parseInt(accountNumber);

    const createUserAccountQuery = `INSERT INTO USERS(login, password, balance, client_id, account_number) VALUES(
        '${hashedLogin}',
        '${hashedPassword}',
        0,
        '${id}',
        '${accountNumber}'
    )`;

    const createUserAccountResult = await database.query(
      createUserAccountQuery
    );

    if (createUserAccountResult.rowCount > 0) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "albertgrzegrzolka124@gmail.com",
          pass: "oosdsqimhegrdasb",
        },
      });

      const mailOptions = {
        from: `albertgrzegrzolka124@gmail.com`,
        to: `${this.email}`,
        subject: "Your account has been created",
        text: `Your login is: ${login} and your password is: ${password}`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return true;
    } else {
      return false;
    }
  }
}

module.exports = RegisterUser;
