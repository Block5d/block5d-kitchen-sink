var mongoose = require('mongoose');
module.exports = mongoose.model('group',{
    project_id: String,
    group_name: String,
    members:Array,
    createdAt:Date,
    modifiedAt:Date
 
});
