const express = require("express");
const { createUser} = require("../api-function/user-function");
const router = express.Router();
router.post("/userSignup", createUser);
module.exports = router;
