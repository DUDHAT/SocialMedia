const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema({
  username: {
    type: String,
    required: true,
    unique: false,
  },
  ContactNumber: {
    type: String,
    required: true,
    unique: false,
  },
  Email: {
    type: String,
    required: true,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SocialmediaUser", UserModel);
