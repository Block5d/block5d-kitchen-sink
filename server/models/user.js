var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
	id: String,
	email: String,
	password: String,
	fullname: String,
  dateOfBirth: Date,
  address: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length > 6;
      },
      message: '{VALUE} must be more than 6 chars!'
    },
  },
  gender: String,
  nationality: String,
  contactNumber: Number
});
