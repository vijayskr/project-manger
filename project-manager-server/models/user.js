// Mogoose User Model

var mongoose = require('mongoose');

let user = new mongoose.Schema({
  userId: {
    type: Number
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  employeeId: {
    type: Number
  },
  projectId: {
    type: Number
  },
  taskId: {
    type: Number
  }
});

module.exports = mongoose.model("User", user);
