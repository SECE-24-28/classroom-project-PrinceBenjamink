const User = require("../models/user");
const Admin = require("../models/admin");

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
      active:false,
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


// exports.deleteUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const deletedUser = await User.findByIdAndDelete(userId);
//     return res.status(200).json({
//       success: true,
//       message: "User deleted successfully",
//     });
//   } catch (e) {
//     res.status(404).json({
//       success: false,
//       error: e,
//     });
//   }
// };
