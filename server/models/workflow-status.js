var mongoose = require('mongoose');
module.exports = mongoose.model('status',{
    status_desc: String,
    status_code:String
});
