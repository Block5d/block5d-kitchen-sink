var bCrypt = require('bcrypt-nodejs');
var assert = require('assert');
var Company = require('../../models/company');

const COMPANYS_API_URL = '/api/v1/companies';

module.exports = function(app){
    //新建公司
    app.post(COMPANYS_API_URL,(req, res)=>{
      var company = req.body;
      var newCompany = new Company();
      newCompany.company_name  = company.company_name;
      newCompany.company_reg_no  = company.company_reg_no;
      newCompany.company_type  = company.company_type;
      newCompany.contact.phone_no  = company.phone_no;
      newCompany.contact.company_email  = company.company_email;
      newCompany.contact.fax_no  = company.fax_no;
      newCompany.address_1  = company.address_1;
      newCompany.address_2  = company.address_2;
      newCompany.address_3  = company.address_3;
      newCompany.postal_code  = company.postal_code;
      newCompany.country_origin  = company.country_origin;
      newCompany.city  = company.city;
      newCompany.created_date  = new Date();
      //console.log(newCompany.contact);
      var error = newCompany.validateSync();
      if(!error){
        newCompany.save(function(err, result) {
          res.status(201).json(result);
        });
      }else{
        console.log(error);
        res.status(500).json(error);
      }
    })
    //READ COMPANY
    app.get(COMPANYS_API_URL, (req, res)=>{
      var query = {};
      //console.log('GET /api/v1/users');
      //console.log(req);
      var keyword = req.query.keyword;
      var value = req.query.value;
      // console.log(req.query);
      // console.log("111"+keyword + value);
      //console.log(sortBy);
      //console.log(keyword);
      //console.log(keyword != 'undefined');
      if(typeof keyword == 'undefined' ){
        keyword = "";
        //console.log(123);
      }
      // if(typeof value == 'undefined' || typeof value != ''){
      //   value = 'company_name';
      //   console.log(111);
      // }
      // if(typeof keyword != ''){ 
  
      //   query = { company_name: {$regex: '.*' + keyword + '.*'}};
      //   console.log(value);
      //   console.log(query);
      // }
      switch(value)
      {
      case "company_reg_no":
      query = { company_reg_no: {$regex: '.*' + keyword + '.*'}};
        break;
      case "company_type":
      query = { company_type: {$regex: '.*' + keyword + '.*'}};
        break;
      case "country_origin":
      query = { country_origin: {$regex: '.*' + keyword + '.*'}};
        break;
      default:
      query = { company_name: {$regex: '.*' + keyword + '.*'}};
      }
      //console.log("111" + query);
      // if(value == "company_name"){
      //   query = { company_name: {$regex: '.*' + keyword + '.*'}};
      // }
      // if(value == "company_reg_no"){
      //   query = { company_reg_no: {$regex: '.*' + keyword + '.*'}};
      // }
      // if(value == "company_type"){
      //   query = { company_type: {$regex: '.*' + keyword + '.*'}};
      // }
      // if(value == "country_origin"){
      //   query = { country_origin: {$regex: '.*' + keyword + '.*'}};
      // }
      //console.log(query);
      Company.find(query ,function (err, companies) {
  
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }
        res.status(200).json(companies);
      })
    });
  
  //删除company
    app.delete(COMPANYS_API_URL, (req, res)=>{
      //console.log("delete ... user ");
      console.log(req);
      var deleteCompanyId = req.query._id;
      console.log(deleteCompanyId);
      Company.findByIdAndRemove({_id: deleteCompanyId},(err,result)=>{
        if(err){
          res.status(500).send(err);
        }
        res.status(200).json(result);
     })
    });
    //updata company
    app.put(COMPANYS_API_URL, (req, res)=>{
      //console.log(req.body);
      var company = req.body;
      var newCompany = new Company();
      //console.log(company);
      newCompany._id  = company._id;
      newCompany.company_name  = company.company_name;
      newCompany.company_reg_no  = company.company_reg_no;
      newCompany.company_type  = company.company_type;
      newCompany.contact.phone_no  = company.phone_no;
      newCompany.contact.company_email  = company.company_email;
      newCompany.contact.fax_no  = company.fax_no;
      newCompany.address_1  = company.address_1;
      newCompany.address_2  = company.address_2;
      newCompany.address_3  = company.address_3;
      newCompany.postal_code  = company.postal_code;
      newCompany.country_origin  = company.country_origin;
      newCompany.city  = company.city;
      newCompany.modified_date  = new Date();
      console.log(newCompany);
      var error = newCompany.validateSync();
      
      if(!error){
        //console.log(user._id);
        Company.findByIdAndUpdate({_id: company._id},{ $set: newCompany}, { new: true }, (err, result)=>{
          if (err) res.status(500).json(err);
          res.status(201).json(result);
        })
      }else{
        console.log(error);
        res.status(500).json(error);
      }
    });
}
