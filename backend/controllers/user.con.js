const User = require("../classes/user");

const getUser = async (req, res) => {
  const user = new User();
  const result = await user.getUserData(req, res);

  if (result === false) {
    res.status(401).send("Unauthorized");
  } else {
    res.status(200).send(result);
  }

  console.log(result);
};

module.exports = {
  getUser,
};
