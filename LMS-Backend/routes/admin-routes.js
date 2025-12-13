const express = require("express");
const {
  getAllRequests,
  adminSignup,
  acceptOrDecline,
  createAssignment,
  getAllAssignments,
  deactivateUser,
} = require("../api-function/admin-function");
const router = express.Router();
router.get("/getRequests/:id", getAllRequests);
router.post("/adminSignup", adminSignup);
router.post("/acceptOrDecline",acceptOrDecline);
router.post("/createAssignment",createAssignment);
router.get("/getAllAssignments/:id",getAllAssignments);
router.post("/deactivateUser",deactivateUser);






// router.get("/fetchProfile/:id",fetchUserDetails);
module.exports = router;
