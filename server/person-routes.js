var Person = require('./models/person');

const PERSON_API_URL = '/api/v1/persons';

module.exports = function(app){

    //CREATE PERSON
  app.post(PERSON_API_URL, (req, res)=>{
    //console.log("got data ....");
    var person = req.body;
    //console.log(person);
    var newPerson = new Person();
    newPerson.first_name = person.first_name;
    newPerson.last_name = person.last_name;
    newPerson.job_title = person.job_title;
    newPerson.postal_code = person.postal_code;
    newPerson.address = person.address;
    newPerson.city = person.city;
    newPerson.contact.contact_no = person.contact_no;
    newPerson.contact.email = person.email;
    newPerson.dateOfBirth = person.dateOfBirth;
    newPerson.gender = person.gender;
    newPerson.provider_type = person.provider_type;
    newPerson.firebase_user_uid = person.firebase_user_uid;
    newPerson.modified_date = person.modified_date;
    newPerson.created_date = person.created_date;
    newPerson.created_by = person.created_by;
    newPerson.modified_by = person.modified_by;
    var error = newPerson.validateSync();
    if(!error){
        newPerson.save(function(err, result) {
        res.status(201).json(result);
      });
    }else{
      //console.log(error);
      res.status(500).json(error);
    }
      
  });

  //SEARCH & GET PERSONS
  app.get(PERSON_API_URL, (req, res)=>{
    //var query = {};
    var query = {};
    var keyword = req.query.keyword;
    var type = req.query.type;
    //console.log(keyword);
    //console.log(type);
    if(typeof keyword == 'undefined'){
      keyword = "";
    }
    //  if(keyword = {$regex:'.#.'}){
    //    keyword = "string#";
    //  }
    if(type == 'first_name'){ 
      query = { 'first_name': {$regex: '.*' + keyword + '.*'}};
    }
    if(type == 'last_name'){ 
      query = { 'last_name': {$regex: '.*' + keyword + '.*'}};
    }
    if(type == 'email'){ 
      query = { 'contact.email': {$regex: '.*' + keyword + '.*'}};
    }
    // if(keyword !== 'undefined'){ 
    //   query = `{${type}:$regex:.*${keyword}.*}}`
    //   query = { fullname: {$regex: '.*' + keyword + '.*'}};
    // } 
    //console.log(typeof(keyword))

    Person.find(query ,(err, persons) =>{

      if (err) {
        //console.log(err);
        res.status(500).send(err);
      }
      res.status(200).json(persons);
    });
  });

    // UPDATE USER
    app.put(PERSON_API_URL, (req, res)=>{
      //console.log(req.body);
      let person = req.body;
      let newPerson = new Person();
      newPerson._id = person._id;
      newPerson.first_name = person.first_name;
      newPerson.last_name = person.first_name;
      newPerson.postal_code = person.postal_code;
      newPerson.address = person.address;
      newPerson.city = person.city;
      newPerson.contact.contact_no = person.contact_no;
      newPerson.contact.email = person.email;
      newPerson.modified_date = person.modified_date;
      var error = newPerson.validateSync();
      //console.log(newPerson);
      
      if(!error){
        //console.log(user._id);
        Person.findByIdAndUpdate({_id: person._id},{ $set: newPerson }, { new: true }, (err, result)=>{
          if (err) res.status(500).json(err);
          res.status(201).json(result);
        })
      }
    });

    // DELETE PERSON
    app.delete(PERSON_API_URL, (req, res)=>{
      //console.log("delete ... user ");
      //console.log(req);
      var deletePersonId = req.query._id;
      //console.log(deleteUserId);
      Person.findByIdAndRemove({_id: deletePersonId},(err,result)=>{
        if(err){
          res.status(500).send(err);
        }
        res.status(200).json(result);
     })
    });

}