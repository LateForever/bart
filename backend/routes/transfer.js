const express = require("express");
const router = express.Router();

const { doTransfer } = require("../controllers/transfer.con");

router.post("/api/transfer", doTransfer);

module.exports = router;
