const Auth = require("../classes/auth");

const authUser = async (req, res) => {
  const auth = new Auth();
  const result = await auth.authenticateToken(req, res);

  console.log(result);

  if (result) {
    res.json({ message: "authenticate" });
  } else {
    res.json({ message: "Invalid token" });
  }
};

module.exports = { authUser };
