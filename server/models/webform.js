var mongoose = require('mongoose');
module.exports = mongoose.model('webform',{
    title:String,
    name:String,
    content:Array,
    display_as:String,
    reatedAt:Date,
    modifiedAt:Date,
    
});
