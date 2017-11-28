var mongoose = require('mongoose');

module.exports = mongoose.model('CodeCategroy', {
    categoryDesc: String,
    categoryCode: String,
    is_category: Boolean
});
