var User = require('./models/user');
var bCrypt = require('bcrypt-nodejs');
var assert = require('assert');

module.exports = function(app){

    //CREATE USER
    app.post('/api/v1/users', (req, res)=>{
        console.log(req.body);
        var user = req.body;
        var newUser = new User();
        newUser.password = createHash(user.password);
        newUser.email = user.email;
        newUser.fullname = user.fullname;
        newUser.dateOfBirth = user.dateOfBirth;
        newUser.address = user.address;
        newUser.nationality = user.nationality;
        newUser.contactNumber = user.contactNumber;
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
    app.get('/api/v1/users', (req, res)=>{

      console.log('GET /api/v1/users');
      var query = {};

      User.find(query ,function (err, users) {

        if (err) {
          res.status(500).send(err);
          return;
        }

        console.log(users);

        res.json(users);
      });
    });

    app.get('/api/v2/users', (req, res)=>{
      
        console.log('GET /api/v2/users');
        var query = { fullname: req.params.last_name};
  
        User.find(query ,function (err, users) {
  
          if (err) {
            res.status(500).send(err);
            return;
          }
  
          console.log(users);
  
          res.json(users);
        });
      });

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

};
