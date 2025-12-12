const express = require("express");
const { createUser, adminSignup } = require("../api-function/user-function");
const router = express.Router();
router.post("/userSignup", createUser);
router.post("/adminSignup", adminSignup);
module.exports = router;
