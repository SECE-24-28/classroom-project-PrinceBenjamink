const express = require("express");
const { createUser,completeAssignment} = require("../api-function/user-function");
const router = express.Router();
router.post("/userSignup", createUser);
router.post("/completeAssignment",completeAssignment);
module.exports = router;
