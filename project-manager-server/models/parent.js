var mongoose = require('mongoose');

const schema = mongoose.Schema;

let parent = new schema ({
    parentId: {
        type: Number
    },
    parentTask: {
        type: String
    }
});
module.exports = mongoose.model("Parent",parent);
