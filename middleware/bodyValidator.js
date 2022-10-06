const { body } = require("express-validator");
var userBody = [
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({ min: 5 }).withMessage("Password not valid !"),
    body("username").notEmpty().withMessage("username required !"),
  ];
  
  var loginBody = []
module.exports =  {userBody}