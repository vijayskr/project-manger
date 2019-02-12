// Mogoose Task Model

var mongoose = require('mongoose');

const schema = mongoose.Schema;

let task = new schema ({
    taskId: {
        type: Number
    },
    parentId: {
        type: Number
    },
    projectId: {
        type: Number
    },
    task: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    priority: {
        type: Number
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model("Task", task);
