var code = require('../models/code');
var categroy = require('../models/category');

const addcodeurl = '/api/codemana';
const addcategory = '/api/category';

module.exports = function (app) {
    app.get(addcodeurl, (req, res) => {
        let keyword = req.query.keywork;
        let type = req.query.type;
        let query;
        if (type == 'Code') {
            query = { 'code_details.code': { $regex: '.*' + keyword + '.*' } }
        }
        if (type == 'CodeDesc') {
            query = { 'code_details.code_desc': { $regex: '.*' + keyword + '.*' } }
        }
        if (type == 'CateCode') {
            query = { 'category_details.categoryCode': { $regex: '.*' + keyword + '.*' } }
        }
        if (type == 'CateDesc') {
            query = { 'category_details.categoryDesc': { $regex: '.*' + keyword + '.*' } }
        }
        code.find(query,(err, result)=>{
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(result);
        })
    })
    app.delete(addcodeurl, (req, res) => {
        code.findByIdAndRemove({ _id: req.query._id }, (err, result) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(result);
        })
    })
    app.put(addcodeurl, (req, res) => {
        let addcode = req.body;
        let updatecode = new code();
        updatecode._id = addcode._id;
        updatecode.code_details.code_desc = addcode.code_desc;
        updatecode.code_details.code = addcode.code;
        updatecode.category_details.categoryCode = addcode.categoryCode;
        updatecode.category_details.categoryDesc = addcode.categoryDesc;
        updatecode.category_details.is_category = addcode.is_category;
        updatecode.modified_date = addcode.modified_date;
        var error = updatecode.validateSync();
        if (!error) {
            code.findByIdAndUpdate({ _id: addcode._id }, { $set: updatecode }, (err, result) => {
                if (err) res.status(500).json(err);
                res.status(201).json(result);
            })
        } else {
            console.log(error);
            res.status(500).json(error);
        }
    })
    app.post(addcodeurl, (req, res) => {
        let addcode = req.body;
        let newcode = new code();
        newcode._id = addcode._id;
        newcode.code_details.code_desc = addcode.code_details.code_desc;
        newcode.code_details.code = addcode.code_details.code;
        newcode.category_details.categoryDesc = addcode.category_details.categoryDesc;
        newcode.category_details.categoryCode = addcode.category_details.categoryCode;
        newcode.category_details.is_category = addcode.category_details.is_category;
        newcode.modified_date = addcode.modified_date;
        newcode.created_date = addcode.created_date;
        newcode.created_by = addcode.created_by;
        newcode.modified_by = addcode.modified_by;
        newcode.parent_id = addcode.parent_id;
        var error = newcode.validateSync();
        if (!error) {
            newcode.save(function (err, result) {
                res.status(201).json(result);
            });
        } else {
            console.log(error);
            res.status(500).send(error);
        }
    })
    app.post(addcategory,(req,res)=>{
        let getcategory = req.body;
        let newcategory = new categroy();
        newcategory.categoryDesc = getcategory.categoryDesc;
        newcategory.categoryCode = getcategory.categoryCode;
        newcategory.is_category = getcategory.is_category;
        var error = newcategory.validateSync();
        console.log(newcategory);
        if (!error) {
            newcategory.save(function (err, result) {
                console.log(addcategory);
                res.status(201).json(result);
            });
        } else {
            console.log(error);
            res.status(500).send(error);
        }
    })
    app.get(addcategory,(req,res)=>{
        categroy.find((err, result)=>{
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(result);
        })
    })
}
