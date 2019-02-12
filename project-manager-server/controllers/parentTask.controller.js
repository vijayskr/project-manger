/*
    Parent Task Routes & Corresponding API
*/

const express = require('express'),
    parentTaskController = express.Router();
    // url = require('url');

// Parent Task Model
let ParentTask = require('../data_models/parenttask');

// Get Parent Tasks
parentTaskController.route('/').get(function (req, res) {

    var parentTaskQuery = ParentTask.find();

    var queryparams = req.query;

    if (queryparams.searchKey) {
        parentTaskQuery.or([
            { 'Parent_Task': { $regex: queryparams.searchKey, $options: 'i' } }]);
    }

    parentTaskQuery.exec(function (err, tasks) {

        if (err) {
            res.json({ 'Success': false })
        }
        else {
            res.json({ 'Success': true, 'Data': tasks });
        }
    });
});

// Create New Parent Task
parentTaskController.route('/add').post(function (req, res) {

    let parentTask = new ParentTask(req.body);

    parentTask.save()
        .then(parentTask => {
            res.status(200).json({ 'Success': true })
        })
        .catch(err => {
            res.status(400).send({ 'Success': false, 'Message': 'Error occured while creating new task' });
        });
});

// Get Parent Task by ID
parentTaskController.route('/:id').get(function (req, res) {

    let parentId = req.params.id;

    ParentTask.findOne({ Parent_ID: parentId }, function (err, task) {
        if (err) {
            res.json({ 'Success': false, 'Message': 'Parent Task not Found' })
        }
        else {
            res.json({ 'Success': true, 'Data': task });
        }
    });
});

module.exports = parentTaskController;
