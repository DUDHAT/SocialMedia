const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../Model/SocialMedia.User.Model");
const { body, validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const username = req.body.username;
  const ContactNumber = req.body.ContactNumber;
  const Email = req.body.Email;
  const password = req.body.password;

  //express velideter send message
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //password hash
  bcrypt.hash(password, 10, function (err, hash) {
    UserModel.findOne({ username: username }).then((data) => {
      if (data) {
        res.send({ username: "username allready exit" });
      } else {
        const data = {
          username: username,
          ContactNumber: ContactNumber,
          Email: Email,
          password: hash,
        };
        UserModel.create(data).then((data) => {
          res.send(data);
        });
      }
    });
  });
};
