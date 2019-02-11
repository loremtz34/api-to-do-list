'user strict';
var sql = require('../db');

//User object constructor
var User = function(name){
    this.name = name.name;
};

User.createUser = function createUser(newUser, result) {    
        sql.query("INSERT INTO users set ?", newUser, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                sql.query("Select * from users ORDER BY id DESC LIMIT 1", function (err, res) {
                    if (err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                    console.log('last inserted task: ', res);
                    result( res);
                });
            });           
};
User.getUserById = function createUser(userId, result) {
        sql.query("Select * from users where id = ? ", userId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getAllUser = function getAllUser(result) {
        sql.query("Select * from users", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('users : ', res);  

                 result(null, res);
                }
            });   
};
User.updateById = function(id, user, result){
  sql.query("UPDATE users SET name = ? WHERE id = ?", [user.name, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(id, result){
     sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            });
};


module.exports= User;