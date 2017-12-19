var mongoose = require('mongoose');

module.exports = mongoose.model('projectSubmissions', {
    description: String,
    authority: String,
    project_id: String,
    planned_submission_date: Date,
    first_submission_date: Date,
    second_submission_date: Date,
    type: String,
    status: String,
    modified_date: Date,
    created_date: Date
});
