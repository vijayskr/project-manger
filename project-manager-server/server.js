/******************************************************************************************
File    :   server.js
Desc    :   This is the NodeJS, Express - REST Api to MongoDB Database using MONGOOSE
*******************************************************************************************/

//Standard Libray Includes
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

//Import Models
var user = require("./models/user");
var task = require("./models/task");
var project = require("./models/project");
var parent = require("./models/parent");

//Initiate Express APP
const app = express();

//Configure Express Router for handling different Routes
const router = express.Router();

//Cross Functional Operation
app.use(cors());
//Setup the Body Parser to handle JSON
app.use(bodyparser.json());

//Configure & Connect MongoDB
//Using the Mongo Cloud DB for the Project Manager APP
mongoose.connect(
  "mongodb+srv://admin:admin@myatlascluster0-p0uai.mongodb.net/project-manager?retryWrites=true",
  { useNewUrlParser: true }
);

const connection = mongoose.connection;
mongoose.Promise = global.Promise;

//Open the DB Connection
connection.once("open", () => {
  console.log("Connected to Mongo Cloud");
});

/***************************************************************************************
 ****************** User Details Router Handline ****************************************
 ****************************************************************************************/
router.route("/users").get((req, res) => {
  user.find((err, users) => {
    if (err) console.log(err);
    else res.json(users);

    console.log(users);
  });
});

router.route("/users/add").post((req, res) => {
  let newUser = new user(req.body);
  console.log(newUser);

  newUser
    .save()
    .then(newUser => {
      res.status(200).json({ newUser: "Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Not able to add user");
    });
});

router.route("/users/delete/:id").get((req, res) => {
  user.findOneAndDelete({ _id: req.params.id }, (err, users) => {
    if (err) res.json(err);
    else res.json("Successfully Deleted");
  });
});

router.route("/users/edit/:id").post((req, res) => {
  user.findById({ _id: req.params.id }, (err, users) => {
    if (!users) return next(new Error("Could not load document"));
    else {
      users.userId = req.body.userId;
      users.firstName = req.body.firstName;
      users.lastName = req.body.lastName;
      users.employeeId = req.body.employeeId;
      users.projectId = req.body.projectId;
      users.taskId = req.body.taskId;
      users
        .save()
        .then(users => {
          res.json("Update Done!");
        })
        .catch(err => {
          res.status(400).send("Update Failed");
        });
    }
  });
});

/***************************************************************************************
 ****************** Task Details Router Handline ****************************************
 ****************************************************************************************/
router.route("/tasks").get((req, res) => {
  task.find((err, tasks) => {
    if (err) console.log(err);
    else res.json(tasks);

    console.log(tasks);
  });
});

router.route("/tasks/add").post((req, res) => {
  let newTask = new task(req.body);
  console.log(newTask);

  newTask
    .save()
    .then(newTask => {
      res.status(200).json({ newTask: "Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Not able to add user");
    });
});

router.route("/tasks/delete/:id").get((req, res) => {
  task.findOneAndDelete({ _id: req.params.id }, (err, tasks) => {
    if (err) res.json(err);
    else res.json("Successfully Deleted");
  });
});

router.route("/tasks/edit/:id").post((req, res) => {
  task.findById({ _id: req.params.id }, (err, tasks) => {
    if (!tasks) return next(new Error("Could not load document"));
    else {
      tasks.taskId = req.body.taskId;
      tasks.parentId = req.body.parentId;
      tasks.projectId = req.body.projectId;
      tasks.task = req.body.task;
      tasks.startDate = req.body.startDate;
      tasks.endDate = req.body.endDate;
      tasks.priority = req.body.priority;
      tasks.status = req.body.status;
      tasks
        .save()
        .then(tasks => {
          res.json("Update Done!");
        })
        .catch(err => {
          res.status(400).send("Update Failed");
        });
    }
  });
});

/***************************************************************************************
 ****************** Project Details Router Handline ****************************************
 ****************************************************************************************/
router.route("/projects").get((req, res) => {
  project.find((err, projects) => {
    if (err) console.log(err);
    else res.json(projects);

    console.log(projects);
  });
});

router.route("/projects/add").post((req, res) => {
  let newProject = new project(req.body);
  console.log(newProject);

  newProject
    .save()
    .then(newProject => {
      res.status(200).json({ newProject: "Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Not able to add user");
    });
});

router.route("/projects/delete/:id").get((req, res) => {
  project.findOneAndDelete({ _id: req.params.id }, (err, projects) => {
    if (err) res.json(err);
    else res.json("Successfully Deleted");
  });
});

router.route("/projects/edit/:id").post((req, res) => {
  project.findById({ _id: req.params.id }, (err, projects) => {
    if (!projects) return next(new Error("Could not load document"));
    else {
      projects.projectId = req.body.projectId;
      projects.project = req.body.project;
      projects.startDate = req.body.startDate;
      projects.endDate = req.body.endDate;
      projects.priority = req.body.priority;
      projects
        .save()
        .then(projects => {
          res.json("Update Done!");
        })
        .catch(err => {
          res.status(400).send("Update Failed");
        });
    }
  });
});

/***************************************************************************************
 ****************** Parent Project Details Router Handline ******************************
 ****************************************************************************************/
router.route("/parentprj").get((req, res) => {
  parent.find((err, parents) => {
    if (err) console.log(err);
    else res.json(parents);

    console.log(parents);
  });
});

router.route("/parentprj/add").post((req, res) => {
  let newParent = new parent(req.body);
  console.log(newParent);

  newParent
    .save()
    .then(newParent => {
      res.status(200).json({ newParent: "Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Not able to add user");
    });
});

router.route("/parentprj/delete/:id").get((req, res) => {
  parent.findOneAndDelete({ _id: req.params.id }, (err, paren) => {
    if (err) res.json(err);
    else res.json("Successfully Deleted");
  });
});

router.route("/parentprj/edit/:id").post((req, res) => {
  parent.findById({ _id: req.params.id }, (err, paren) => {
    if (!paren) return next(new Error("Could not load document"));
    else {
      paren.parentId = req.body.parentId;
      paren.parentTask = req.body.parentTask;
      paren
        .save()
        .then(paren => {
          res.json("Update Done!");
        })
        .catch(err => {
          res.status(400).send("Update Failed");
        });
    }
  });
});

app.use("/", router);
app.listen(4000, () => {
  console.log("App Running in port 4000");
});
