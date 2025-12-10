const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { details } = req.body;
    const creatUser = await User.insertOne(
      details,
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

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
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

exports.findUser = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await User.find({firstName: name});
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { name } = req.params;

    const deletedUser = await User.deleteOne({ firstName: name });

    if (deletedUser.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });

  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, phone } = req.params;
    const updatedUser = await User.updateOne(
      { firstName: name },
      { $set: { mobileNumber: phone } }
    );
    if (updatedUser.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    } 
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e.message,
    });
  } 
};
