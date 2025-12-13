const Admin = require("../models/admin");
const User = require("../models/user");
const AssignmentCreated = require("../models/assignment-created");
const AssignmentCompleted = require("../models/assignment-completed");
exports.getAllRequests = async (req, res) => {
  try {
    const { id } = req.params;
    const getDetails = await Admin.findById(id).populate("listOfRequest");
    return res.status(200).json({
      success: true,
      data: getDetails.listOfRequest,
    });
  } catch (e) {
    return res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.adminSignup = async (req, res) => {
  try {
    const {
      firstName,
      secondName,
      email,
      mobileNumber,
      collegeName,
      password,
    } = req.body;
    const [checkDetails, checkUserDetails, checkCollege] = await Promise.all([
      Admin.findOne({ mobileNumber, email }),
      User.findOne({ mobileNumber, email }),
      Admin.findOne({ collegeName }),
    ]);
    if (checkDetails || checkUserDetails || checkCollege) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }
    const createAdmin = await Admin.create({
      firstName,
      secondName,
      email,
      mobileNumber,
      collegeName,
      password,
    });
    return res.status(200).json({
      success: true,
      message: "Admin is created",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.acceptOrDecline = async (req, res) => {
  try {
    const { adminId, userId, select } = req.body;
    if (select === 1) {
      await User.findByIdAndUpdate(userId, { active: true },{ new: true });
    }
    await Admin.findByIdAndUpdate(
      adminId,
      { $pull: { listOfRequest: userId } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Process is done successfully",
    });
  } catch (e) {
      return res.status(404).json({
        success: false,
        error: e,
      });
  }
};

exports.createAssignment = async (req, res) => {
  try {
    const { assignmentName, deadline, adminId } = req.body;
    const now = new Date();
    if (new Date(deadline) < now) {
      return res.status(400).json({
        success: false,
        message: "Deadline must be a future date",
      });
    }
    const createAssignment = await AssignmentCreated.create({
      assignmentName,
      deadline,
    });
    const adminDetails = await Admin.findByIdAndUpdate(
      adminId,
      { $push: { listOfAssignments: createAssignment._id } },
      { new: true }
    );
    await User.updateMany(
      { collegeName: adminDetails.collegeName },
      { $push: { setOfAssignmentsAssigned: createAssignment._id } }
    );
    return res.status(200).json({
      success: true,
      message: "Assignment is created successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.getAllAssignments = async (req, res) => {
  try {
    const {id} = req.params;
    const userDetails = await User.findById(id).populate("setOfAssignmentsAssigned");
    return res.status(200).json({
      success: true,
      data: userDetails.setOfAssignmentsAssigned,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};


exports.deactivateUser = async (req, res) => {
  try {
    const { adminId,userId,decision } = req.body;
    const adminDetails = await Admin.findById(adminId);
    if(adminDetails.collegeName!== (await User.findById(userId)).collegeName){
      return res.status(403).json({
        success: false,
        message: "You are not authorized to deactivate this user",
      });
    }
    if(decision==="deactivate"){
    await User.findByIdAndUpdate(userId, { active: false },{ new: true });
    return res.status(200).json({
      success: true,
      message: "User is deactivated successfully",
    });
  }
    else{
      await User.findByIdAndUpdate(userId, { active: true },{ new: true });
      return res.status(200).json({
        success: true,
        message: "User is activated successfully",
      });
    }
  } catch (e) {
      return res.status(404).json({
        success: false,
        error: e,
      });
  }
};


exports.fetchResult = async (req, res) => {
  try {
    const { assignmentId } = req.body;

    const result = await AssignmentCreated.findById(assignmentId)
      .populate({
        path: "assignmentCompleted",
        populate: {
          path: "user",
          select: "firstName secondName email mobileNumber",
        },
      });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
