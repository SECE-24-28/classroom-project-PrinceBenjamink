const User = require("../models/user");
const Admin = require("../models/admin");
const AssignmentCompleted = require("../models/assignment-completed");
const AssignmentCreated = require("../models/assignment-created");
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
    const { userId, assignmentId } = req.body;

    const assignmentDetails = await AssignmentCreated.findById(assignmentId);
    if (!assignmentDetails) {
      return res.status(404).json({
        success: false,
        message: "Assignment not found",
      });
    }

    if (new Date() > new Date(assignmentDetails.deadline)) {
      return res.status(400).json({
        success: false,
        message: "Deadline crossed. Submission not allowed",
      });
    }

    const alreadySubmitted = await AssignmentCompleted.findOne({
      user: userId,
      assignment: assignmentId,
    });

    if (alreadySubmitted) {
      return res.status(400).json({
        success: false,
        message: "You have already submitted this test",
      });
    }

    const completeAssignment = await AssignmentCompleted.create({
      user: userId,
      assignment: assignmentId,
      submittedAt: new Date(),
    });

    await AssignmentCreated.findByIdAndUpdate(
      assignmentId,
      { $push: { assignmentCompleted: completeAssignment._id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Test submitted successfully",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};