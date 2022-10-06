const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
let regitser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var newPassword = await bcrypt.hash(req.body.password, 10);
  if (!newPassword) {
    return res.status(400).json({ errors: "error in password hashing !" });
  }
  req.body.password = newPassword;
  // TODO create user !!
  var user = req.body;
  // TODO Email verification (node mailer )
  return res.status(201).json({ user });
};

module.exports = {
  regitser,
};
