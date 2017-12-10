var person = require('./models/persondetail');

const persondetail = '/api/persondetail';

module.exports = function (app) {
    app.get(persondetail,(req,res)=>{
        console.log(req);
        person.find((err,result)=>{
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(result);
        });
    })
    app.post(persondetail,(req,res)=>{
        let get = req.body;
        let send = new person();
        send.project_id = get.project_id
        send.person_id = get.person_id
        send.site_fax = get.site_fax
        send.site_phone = get.site_phone
        send.site_email = get.site_email
        send.parent_person_id = get.parent_person_id
        send.modified_date = get.modified_date
        send.created_date = get.created_date
        send.created_by = get.created_by
        send.modified_by = get.modified_by
        let error = send.validateSync();
        if (!error) {
            send.save(function (err, result) {
                res.status(201).json(result);
            });
        } else {
            console.log(error);
            res.status(500).send(error);
        }
    })
}