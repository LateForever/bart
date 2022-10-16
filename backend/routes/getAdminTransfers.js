const express = require("express");
const router = express.Router();

const { getAllTransfers } = require("../controllers/getAdminTransfers");

router.get("/api/admin/transfers", getAllTransfers);

module.exports = router;
