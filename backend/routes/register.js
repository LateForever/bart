const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/register.con");

router.post("/api/create/user", registerUser);

module.exports = router;
