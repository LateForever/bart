const RegisterUser = require("../classes/register");

const registerUser = async (req, res) => {
  console.log(req.body);
  const {
    birthDate,
    email,
    firstName,
    lastName,
    age,
    living_address,
    living_city,
    living_postal_code,
  } = req.body;

  console.log(birthDate);

  const user = new RegisterUser(
    birthDate,
    email,
    firstName,
    lastName,
    age,
    living_address,
    living_city,
    living_postal_code
  );

  const result = await user.createUser();

  if (result) {
    const account = await user.createAccount();

    if (account) {
      res.json({ message: "User created" });
    } else {
      res.json({ message: "Account not created" });
    }
  } else {
    res.json({ message: "User not created" });
  }
};

module.exports = {
  registerUser,
};
