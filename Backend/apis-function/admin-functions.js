const Admin = require("../models/Admin");

exports.createAdmin = async (req, res) => {
  try {
    const { firstName, secondName, email, mobileNumber, password } = req.body;

    const newUser = await Admin.create({
      firstName,
      secondName,
      email,
      mobileNumber, 
      password,
    });

    return res.status(200).json({
      success: true,
      message: "Admin is created successfully",
      data: newUser,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

exports.findallAdmins = async (req, res) => {
    try {
    const admins = await Admin.find({}).select('-password');
    return res.status(200).json({
      success: true,
      data: admins,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message, 
    });
    }
}
