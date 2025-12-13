const User = require("../models/user");
const Admin = require("../models/admin");
const AssignmentCompleted = require("../models/assignment-completed");
exports.createUser = async (req, res) => {
  try {
    const {
      firstName,
      secondName,
      email,
      mobileNumber,
      collegeName,
      active,
      password,
    } = req.body;
    const [checkDetails, checkAdminDetails] = await Promise.all([
      User.findOne({ mobileNumber, email }),
      Admin.findOne({ mobileNumber, email }),
    ]);
    if (checkDetails || checkAdminDetails) {
      return res.status(400).json({
        success: false,
        message: "Email/Mobile Number already exists",
      });
    }
    const userDetails = await User.create({
      firstName,
      secondName,
      email,
      mobileNumber,
      collegeName,
      active: false,
      password,
    });

    await Admin.findOneAndUpdate(
      { collegeName: collegeName },
      { $push: { listOfRequest: userDetails._id } }
    );
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.completeAssignment = async (req, res) => {
  try {
    const { userId, assignmentId, completedTime } = req.body;

    const now = new Date();
    if (new Date(completedTime) > now) {
      return res.status(400).json({
        success: false,
        message: "Completed time cannot be in the future",
      });
    }

    await AssignmentCompleted.create({
      user: userId,
      assignment: assignmentId,
      completedTime: completedTime,
    });
    await User.findByIdAndUpdate(
      userId,
      { $pull: { setOfAssignmentsAssigned: assignmentId } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Assignment marked as completed",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
