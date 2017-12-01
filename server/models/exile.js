var mongoose = require('mongoose');

module.exports = mongoose.model('simple1', {
    url: String,
    name: String,
    content: String
});
