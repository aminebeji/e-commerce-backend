let router = require("express").Router();
let controller = require("./../controllers/user");
let { userBody } = require("./../middleware/bodyValidator");
router.post("/register", userBody, controller.regitser);
module.exports = router;
