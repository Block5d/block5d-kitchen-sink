var User = require('./models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(app){
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
        
        newUser.save(function(err, result) {
          res.status(201).send("User added to database");
        });
    })


    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}