var mongoose = require('mongoose');

module.exports = mongoose.model('CodeCategory', {
    categoryDesc: String,
    categoryCode: String,
    is_category: Boolean
});
