var mongoose = require('mongoose');
module.exports = mongoose.model('workflow',{
    project_id: String,
    workflows:{
        from_status:String,
        to_status:String,
        rules:String,
        action:String 
    },
    createdAt:Date,
    modifiedAt:Date 
 
});
