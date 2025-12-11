const User = require("../models/user");

// Create one user
exports.createUser = async (req, res) => {
  try {
    const { firstName, email } = req.body;

    const newUser = await User.create({
      firstName,
      email
    });

    return res.status(200).json({
      success: true,
      message: "User is created successfully",
      data: newUser
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

// Create many users
exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;

    const newUsers = await User.insertMany(details);

    return res.status(200).json({
      success: true,
      message: "Users created successfully",
      data: newUsers
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

// Find user by name
exports.findUser = async (req, res) => {
  try {
    const { name } = req.params;

    const user = await User.find({ firstName: name });

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.deleteOne({ _id: id });

    if (deletedUser.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;  
    const { firstName, email } = req.body; 

    const updatedUser = await User.updateOne(
      { _id: id },
      { $set: { firstName, email } }
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

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

exports.userRegister = async (req, res) => {
  try{
    const {firstName,secondName,email,mobileNumber,password} = req.body;

    const findUser = await User.findOne({ email,mobileNumber });
    if(findUser){
      return res.status(400).json({
        success : false,
        message : "User is already registered"
      });
    }

    await User.create({
      firstName,
      secondName,
      email,
      mobileNumber,
      password
    });

    return res.status(200).json({
      success : true,
      message : "User is registered successfully",
    });

  } catch(e){
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

exports.findUserbyEmail = async (req, res) => {
  try {
    const { email } = req.params;
    
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });

  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "User not Found",
    });
  }
};
exports.getAllUserDetails = async (req, res) => {
  try {
    console.log("HEllo world");

    const { email, mobile } = req.params;
    console.log("The request query:", req.query);

    console.log("The email query:", email);
    console.log("Mobile:", mobile);

    const getDetails = await User.find({ email, mobileNumber: mobile });
    if (!getDetails) {
      return res.status(404).json({
        success: false,
        message: "User not existing",
      });
    }
    return res.status(200).json({
      success: true,
      data: getDetails,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};