var mongoose = require('mongoose');

module.exports = mongoose.model('persondetail', {
    project_id: Number,
    person_id: Number,
    site_fax: Number,
    site_phone: Number,
    site_email: String,
    parent_person_id: Number,
    modified_date: Date,
    created_date: Date,
    created_by: String,
    modified_by: String,
});
