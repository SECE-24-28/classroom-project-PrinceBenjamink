const mongoose = require("mongoose");
const AssignmentCompleted = new mongoose.Schema({
  marks: {
    type: Number,
  },
  completedTime: {
    type: Date,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AssignmentCreated",
    require: true,
  },
});
module.exports = mongoose.model("AssignmentCompleted", AssignmentCompleted);
