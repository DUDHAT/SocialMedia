const express = require("express");
const { body, validationResult } = require("express-validator");

const UserController = require("../Controller/SocialMedia.User.Controller");

const user_router = express.Router();

user_router.post(
  "/signup",
  [
    body("username").trim().isLength({ min: 3 }).withMessage("min length is 3"),
    body("ContactNumber").trim(),
    body("Email").trim(),
    body("password").trim().isLength({ min: 6 }),
  ],
  UserController.signup
);

// user_router.post("/signin", user_models.signin);

module.exports = user_router;
