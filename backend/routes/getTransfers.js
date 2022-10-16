const express = require("express");
const router = express.Router();

const { getTransfers } = require("../controllers/getTransfers");

router.get("/api/getTransfers", getTransfers);

module.exports = router;
