var mongoose = require('mongoose');

module.exports = mongoose.model('CodeManagement', {
    // _id: Number,
    code_details: {
        code_desc: String,
        code: String
    },
    category_details: {
        categoryDesc: String,
        categoryCode: String,
        is_category: Boolean
    },
    modified_date: Date,
    created_date: Date,
    created_by: String,
    modified_by: String,
    parent_id: String
});
