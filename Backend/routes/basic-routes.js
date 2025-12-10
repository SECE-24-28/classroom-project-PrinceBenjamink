const express = require("express");
const {
  createUser,
  createManyUsers,
  findUser,
  deleteUser,
  updateUser
} = require("../apis-function/user-functions");
const router = express.Router();
router.post("/userSignup", createUser);
router.post("/userSignupMany", createManyUsers);
router.get("/findUser/:name", findUser);
router.delete("/deleteUser/:name", deleteUser);
router.put("/updateUser/:name/:phone", updateUser);
module.exports = router;