const express = require("express");
const { createUser} = require("../api-function/user-function");
const router = express.Router();
router.post("/userSignup", createUser);
// router.get("/getAllUsers",getAllUsers);
module.exports = router;
