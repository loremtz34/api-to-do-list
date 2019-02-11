'user strict';
var sql = require('../db');

//Task object constructor
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
};
Task.createTask = function createUser(newTask, result) {
    sql.query("INSERT INTO tasks set ?", newTask, function (err) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        console.log(newTask);
        //result(newTask);
        sql.query("Select * from tasks ORDER BY id DESC LIMIT 1", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            console.log('last inserted task: ', res);
            result( res);
        });
    });
};
Task.getTaskById = function createUser(taskId, result) {
    sql.query("Select * from tasks where id = ? ", taskId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Task.getAllTask = function getAllTask(result) {
    sql.query("Select * from tasks", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);

            result(null, res);
        }
    });
};
Task.updateById = function (id, task, result) {
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
    sql.query
};
Task.remove = function (id, result) {
    sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

Task.search = function (text, result) {
    sql.query("SELECT * FROM tasks WHERE task LIKE ? ", [text], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('tasks : ', res);
            result(null, res);
        }

    })
}

module.exports = Task;