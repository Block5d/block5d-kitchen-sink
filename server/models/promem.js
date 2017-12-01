var mongoose = require('mongoose');

module.exports = mongoose.model('promem', {
    project_id: String,
    person_id: String,
    company_id: String,
    isEnabled: Boolean,
    modified_date: Date,
    created_date: Date,
    created_by: String,
    modified_by: String
});