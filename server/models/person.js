var mongoose = require('mongoose');

module.exports = mongoose.model('person', {
    first_name: String,
    last_name: String,
    job_title: String,
    contact: {
        contact_no:Number,
        email:String
    }, 
    dateOfBirth: Date,
    gender: String,
    postal_code:Number,
    address: String,
    city: String,
    provider_type: String,
    firebase_user_uid:String,
    modified_date: Date,
    created_date: Date,
    created_by:String,
    modified_by:String
});
