var bCrypt = require('bcrypt-nodejs');
var assert = require('assert');
var UserGroup = require('../models/user-group');

const UserGroup_API_URL ='/api/v1/userGroups';

module.exports = function(app){
    app.post(UserGroup_API_URL,(req,res)=>{
        var userGroup = req.body;
        console.log(userGroup);
        var newUserGroup = new UserGroup();
        newUserGroup.project_id = userGroup.project_id;
        newUserGroup.group_name = userGroup.group_name;
        newUserGroup.members = userGroup.members;
        newUserGroup.createdAt = new Date();
        console.log(userGroup);
        var error = newUserGroup.validateSync();
        if(!error){
            newUserGroup.save(function(err, result) {
            res.status(201).json(result);
            });
        }else{
            console.log(error);
            res.status(500).json(error);
        }
    })
    app.get(UserGroup_API_URL, (req, res)=>{
        var query = {};
        var keyword = req.query.keyword;
        var value = req.query.value;
        if(typeof keyword == 'undefined' ){
        keyword = "";
        }
        switch(value)
        {
        case "group_name":
        query = { group_name: {$regex: '.*' + keyword + '.*'}};
        break;
        default:
        query = { project_id: {$regex: '.*' + keyword + '.*'}};
        }
        UserGroup.find(query ,function (err, groups) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.status(200).json(groups);
        })
    });
    app.delete(UserGroup_API_URL,(req,res)=>{
        var deleteUserGroupId =req.query._id;
        UserGroup.findByIdAndRemove({_id:deleteUserGroupId},(err,result)=>{
        if(err){
            res.status(500).send(err);
            }
            res.status(200).json(result);
        })
    });
    app.put(UserGroup_API_URL,(req,res)=>{
        var userGroup = req.body;
        var newUserGroup = new UserGroup();
        newUserGroup._id = userGroup._id;
        newUserGroup.project_id = userGroup.project_id;
        newUserGroup.group_name = userGroup.group_name;
        newUserGroup.members = userGroup.members;
        newUserGroup.modifiedAt = new Date();
        var error = newUserGroup.validateSync();
        if(!error){
            //console.log(user._id);
            userGroup.findByIdAndUpdate({_id: userGroup._id},{ $set: newUserGroup}, { new: true }, (err, result)=>{
              if (err) res.status(500).json(err);
              res.status(201).json(result);
            })
          }else{
            console.log(error);
            res.status(500).json(error);
          }
    })
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}
