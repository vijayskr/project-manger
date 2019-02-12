//// Mongoose Parent Task DB Model [Collection]

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;


var schemaOptions = {
  toObject: {
    virtuals: true
  }
  ,toJSON: {
    virtuals: true
  }
};

// Parent-Task Schema
let ParentTask = new Schema({
  Parent_ID: {
    type: Number
  },
  Parent_Task: {
    type: String,
    required: true
  },
  Project_ID: {
    type: Number,
    default:null
  }
},
schemaOptions,
{
    collection: 'parenttasks'
});

ParentTask.plugin(autoIncrement, {inc_field: 'Parent_ID'}); //Parent ID Auto Increment

module.exports = mongoose.model('ParentTask', ParentTask);
