const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/user.con");

router.get("/api/getUser", getUser);

module.exports = router;
