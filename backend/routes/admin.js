const express = require("express");
const router = express.Router();

const { adminLogin } = require("../controllers/admin");

router.post("/api/admin/login", adminLogin);

module.exports = router;
