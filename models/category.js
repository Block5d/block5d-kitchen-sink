var mongoose = require('mongoose');

module.exports = mongoose.model('CodeCategory', {
    categoryDesc: String,
    categoryCode: Object,
    is_category: Boolean
});
