const express = require("express");
const router = express.Router();

const { authUser } = require("../controllers/auth.con");

router.get("/api/auth/user", authUser);

module.exports = router;
