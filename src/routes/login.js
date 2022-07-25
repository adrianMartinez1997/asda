const { loginVerification } = require("../controllers/loginController");
const router = require("express").Router();

router.post("/", loginVerification);

module.exports = router;
