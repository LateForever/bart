const express = require("express");
const router = express.Router();

const { userLogin } = require("../controllers/login.con");

router.post("/api/login", userLogin);

module.exports = router;
