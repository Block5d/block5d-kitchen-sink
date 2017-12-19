var mongoose = require('mongoose');

module.exports = mongoose.model('company',{
  id: String,
	company_name: String,
  company_reg_no: String,
  company_type: String,
  contact : {
        phone_no: String,
        company_email: String,
        fax_no: String
  },
  address_1 : String,
  address_2 : String, 
  address_3 : String,
  postal_code :String,
  country_origin:String,
  city:String,
  modified_date:Date,
  created_date:Date
});
