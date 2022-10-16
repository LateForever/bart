const express = require("express");
const cors = require("cors");
const database = require("./database");
const loginRoute = require("./routes/login");
const createUserRoute = require("./routes/register");
const authRoute = require("./routes/auth");
const getUserRoute = require("./routes/user");
const doTransferRoute = require("./routes/transfer");
const getTransfersRoute = require("./routes/getTransfers");
const adminLoginRoute = require("./routes/admin");
const getAdminTransfersRoute = require("./routes/getAdminTransfers");

const app = express();

app.use(
  cors({
    origin: "http://localhost:19006",
  })
);
app.use(express.json());

app.use("/", loginRoute);
app.use("/", createUserRoute);
app.use("/", authRoute);
app.use("/", getUserRoute);
app.use("/", doTransferRoute);
app.use("/", getTransfersRoute);
app.use("/", adminLoginRoute);
app.use("/", getAdminTransfersRoute);

app.listen(3001, () => {
  console.log("server running on port 3001");
  try {
    database.connect();
    console.log("database connected");
  } catch (e) {
    console.log(e);
  }
});
