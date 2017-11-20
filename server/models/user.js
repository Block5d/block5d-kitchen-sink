var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
	id: String,
	email: String,
	password: String,
	fullname: String,
    dateOfBirth: Date,
    address: String,
    nationality: String,
    contactNumber: Number
});