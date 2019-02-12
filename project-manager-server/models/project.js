// Mogoose Project Model

var mongoose = require('mongoose');

const schema = mongoose.Schema;

let project = new schema ({
    project_id: {
        type: Number
    },
    project: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    priority: {
        type: Number
    }
});
module.exports = mongoose.model("Project", project);
