var User = require('./models/user');
var bCrypt = require('bcrypt-nodejs');
var assert = require('assert');

const USERS_API_URL = '/api/v1/users';

module.exports = function(app){

    //CREATE USER
  app.post(USERS_API_URL, (req, res)=>{
    //console.log(req.body);
    var user = req.body;
    var newUser = new User();
    newUser.password = createHash(user.password);
    newUser.email = user.email;
    newUser.fullname = user.fullname;
    newUser.dateOfBirth = user.dateOfBirth;
    newUser.address = user.address;
    newUser.nationality = user.nationality;
    newUser.contactNumber = user.contactNumber;
    newUser.gender = user.gender;
    var error = newUser.validateSync();
    if(!error){
      newUser.save(function(err, result) {
        res.status(201).json(result);
      });
    }else{
      console.log(error);
      assert.equal(error.errors['address'].message,
        'Address must be above 6 chars');
      res.status(500).json(error);
    }
      
  });

  //READ USER
  app.get(USERS_API_URL, (req, res)=>{
    var query = {};
    
    console.log('GET /api/v1/users');
    console.log(req);
    var keyword = req.query.keyword;
    console.log(keyword);
    if(typeof keyword != ''){ 
      query = { fullname: {$regex: '.*' + keyword + '.*'}};
    }
    console.log(query);
    User.find(query ,function (err, users) {

      if (err) {
        res.status(500).send(err);
        return;
      }
      //console.log(users);
      res.json(users);
    });
  });

  // SEARCH BY FULL NAME
  /*
  app.get(`${USERS_API_URL}/:fullname`, (req, res)=>{
    //console.log('GET /api/v2/users');
    var queryCriteria = { fullname: req.params.fullname};

    User.find(queryCriteria ,function (err, users) {

      if (err) {
        res.status(500).send(err);
        return;
      }
      //console.log(users);
      res.json(users);
    });
  });*/

  // UPDATE USER
  app.put(USERS_API_URL, (req, res)=>{
    //console.log(req.body);
    var user = req.body;
    var newUser = new User();
    newUser.email = user.email;
    newUser.fullname = user.fullname;
    newUser.dateOfBirth = user.dateOfBirth;
    newUser.address = user.address;
    newUser.nationality = user.nationality;
    newUser.contactNumber = user.contactNumber;
    newUser.gender = user.gender;
    var error = newUser.validateSync();
    
    if(!error){
      //console.log(user._id);
      User.findByIdAndUpdate({_id: user._id},{ $set: user}, { new: true }, (err, result)=>{
        if (err) res.status(500).json(err);
        res.status(201).json(result);
      })
    }else{
      console.log(error);
      assert.equal(error.errors['address'].message,
        'Address must be above 6 chars');
      res.status(500).json(error);
    }
  });

  app.delete(USERS_API_URL, (req, res)=>{
    console.log("delete ... user ");
    console.log(req);
    var deleteUserId = req.query._id;
    console.log(deleteUserId);
    User.findByIdAndRemove({_id: deleteUserId},(err,result)=>{
      if(err){
        res.status(500).send(err);
        return;
      }
      res.status(200).json(result);

   })
  });

  // Generates hash using bCrypt
  var createHash = function(password){
      return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }

};
