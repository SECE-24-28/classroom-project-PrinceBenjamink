const express = require("express");
const {
  createUser,
  createManyUsers,
  findUser,
  deleteUser,
  updateUser,
  getAllUsers,
  userRegister,
  findUserbyEmail,
  getAllUserDetails,
} = require("../apis-function/user-functions");

const {
  createAdmin,
  findallAdmins,
} = require("../apis-function/admin-functions");

const router = express.Router();

router.post("/userSignup", createUser);
router.post("/userSignupMany", createManyUsers);
router.get("/findUser/:name", findUser);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
router.post("/userregister", userRegister);
router.get("/findUserbyEmail/:email", findUserbyEmail);
router.get("/getUserDetails/:email/:mobile", getAllUserDetails);

router.post("/createAdmin", createAdmin);
router.get("/findallAdmins", findallAdmins);

module.exports = router;
