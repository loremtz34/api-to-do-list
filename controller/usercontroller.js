//app.route('/users')
//    .get(userList.list_all_users)
//    .post(userList.create_a_user);
//
//  app.route('/users/:userId')
//    .get(userList.read_a_user)
//    .put(userList.update_a_user)
//    .delete(userList.delete_a_task)

'use strict';

var User = require('../model/usermodel.js');

exports.list_all_users = function(req, res) {
  User.getAllUser(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};



exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);

  //handles null error 
   if(!new_user.name){

    res.status(400).send({ error:true, message: 'Please provide a name' });

  }
else{
  
    User.createUser(new_user, function(err, user_id) {
    
    if (err)
      res.send(err);
    res.json(user_id);
  });
}
};


exports.read_a_user = function(req, res) {
    User.getUserById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
    User.updateById(req.params.userId, new User(req.body), function(err, user) {
        console.log(req.body)
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
    User.remove( req.params.userId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

