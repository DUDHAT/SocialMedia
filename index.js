const express = require("express");
const bodyparser = require("body-parser");
require("dotenv").config();

const connection = require("./DB_Connection/DB.Connection");
const UserRouter = require("./Router/SocialMedia.User.Router");

const port = process.env.PORT || 5152;

const app = express();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/", UserRouter);

//listen port
app.listen(port, () => {
  console.log("index.js listening " + port);
});
