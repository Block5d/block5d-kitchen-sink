var User = require('./models/user');
const bCrypt = require('bcrypt-nodejs'),
      assert = require('assert'),
      multer = require('multer'),
      AWS = require('aws-sdk'),
      multerS3 = require('multer-s3'),
      firebase = require('firebase'),
      googleStorage = require('@google-cloud/storage');
      _ = require('lodash');


const BASE_API_URL = '/api/v1';
const USERS_API_URL = `${BASE_API_URL}/users`;
const UPLOAD_API_URL = `${BASE_API_URL}/upload`;
const UPLOAD_S3_API_URL = `${BASE_API_URL}/upload-s3`;
const UPLOAD_FIRESTORE_API_URL = `${BASE_API_URL}/upload-firestore`;

storage = multer.diskStorage({
  destination: './upload_tmp',
  filename: function(req, file, callback){
    callback(null, `${Date.now()}-${file.originalname}`);
  }
});

upload = multer({
  storage: storage
});

const gstorage = googleStorage({
  projectId: process.env.FIREBASE_PROJECT_ID,
  keyFilename: process.env.FIREBASE_KEY_FILENAME
});

const bucket = gstorage.bucket(process.env.FIREBASE_BUCKET);

const googleMulter = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024 // no larger than 20mb, you can change as needed.
  }
});

AWS.config.region = process.env.AWS_S3_REGION;
var s3bucket = new AWS.S3({
    /** nothing here  */
});

var uploadS3 = new multer({
  storage: multerS3({
      s3: s3bucket,
      bucket: 'nus-stackup9',
      metadata: function(req, file, cb){
          cb(null, {fieldName: file.fieldname});
      },
      key: function(req, file, cb){
          cb(null, Date.now() + '-' + file.originalname);
      }
  })
});


module.exports = function(app){
  
    //CREATE USER
  app.post(USERS_API_URL, (req, res)=> {
    var user = req.body;
    var newUser = new User();
    newUser.password = createHash(user.password);
    newUser.email = user.email;
    newUser.fullname = user.fullname;
    newUser.dateOfBirth = user.dateOfBirth;
    newUser.address = user.address;
    newUser.nationality = user.nationality;
    newUser.contactNumber = user.contactNumber;
    newUser.gender = user.gender;
    var error = newUser.validateSync();
    if(!error){
      newUser.save(function(err, result) {
        if (err)
          console.log(err);
        res.status(201).json(result);
      });
    }else{
      //console.log(error);
      assert.equal(error.errors['address'].message,
        'Address must be above 6 chars');
      res.status(500).json(error);
    }

   });

  /** count all users */
  app.get(`${USERS_API_URL}/count`, (req, res)=>{
    var keyword = req.query.keyword;
    var query = {};
    console.log(keyword);
    if(typeof keyword != ''){
      query = { fullname: {$regex: '.*' + keyword + '.*'}};
    }
    User.find(query).count(function (err, count) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).json(count);
    });
  });

  //READ USER
  app.get(USERS_API_URL, (req, res)=> {
    var query = {};
    //console.log(req);
    var keyword = req.query.keyword;
    var sortBy = req.query.sortBy;
    let currentPerPage = req.query.currentPerPage;
    let itemsPerPage = req.query.itemsPerPage;
    let isAllRecord = req.query.record;
    var offset = (parseInt(currentPerPage) - 1) * parseInt(itemsPerPage);
    
    if (typeof keyword == 'undefined') {
      keyword = "";
    }

    if (typeof sortBy == 'undefined' || typeof sortBy != '') {
      sortBy = 1;
    }
    
    if (typeof keyword != '') {
      query = {fullname: {$regex: '.*' + keyword + '.*'}};
    }

    User.find(query, function (err, users) {

      //console.log(query);
      if (isAllRecord == 'all') {
        User.find({}, function (err, users) {

          if (err) { 
            console.log(err);
            res.status(500).send(err);
          }
          res.status(200).json(users);
        });
      } else {
        //console.log("......");
        User.find(query, function (err, users) {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          }
          res.status(200).json(users);
        }).sort({fullname: parseInt(sortBy)});
        //}).sort({fullname: parseInt(sortBy)}).skip(offset).limit(parseInt(itemsPerPage));
      }
    })
  });

  // UPDATE USER
  app.put(USERS_API_URL, (req, res)=> {
    var user = req.body;
    var updatedUser = new User();
    updatedUser.email = user.email;
    updatedUser.fullname = user.fullname;
    updatedUser.dateOfBirth = user.dateOfBirth;
    updatedUser.address = user.address;
    updatedUser.nationality = user.nationality;
    updatedUser.contactNumber = user.contactNumber;
    updatedUser.gender = user.gender;
    var error = updatedUser.validateSync();
    delete user.createdAt;
    const options = {
      runValidators: true,
      upsert: false,
      setDefaultsOnInsert: false
    }
    if (!error) {
      User.findByIdAndUpdate({_id: user._id}, {$set: user}, options, (err, result)=> {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        }
        res.status(201).json(result);
      })
    } else {
      //console.log(error);
      assert.equal(error.errors['address'].message,
        'Address must be above 6 chars');
      res.status(500).json(error);
    }
  });

    // DELETE USER
    app.delete(USERS_API_URL, (req, res)=> {

      var deleteUserId = req.query._id;

      User.findByIdAndRemove({_id: deleteUserId}, (err, result)=> {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).json(result);
      })
    });


    app.post(UPLOAD_S3_API_URL, upload.array('file[]', 5), (req, res)=> {
      res.status(200).json(req.files);
    });

    app.post(UPLOAD_FIRESTORE_API_URL, googleMulter.array('file[]', 5), (req, res)=> {
      let multipleFiles = req.files;
      multipleFiles.forEach((file, index)=> {
        if (file) {
          uploadImageToStorage(file).then((success) => {
            res.status(200).json({
              status: 'success'
            });
          }).catch((error) => {
            console.error(error);
          });
        }
      });
    });

    app.post(UPLOAD_API_URL, upload.array('file[]', 5), (req, res)=> {
      res.status(200).json(req.files);
    });

    // Generates hash using bCrypt
    var createHash = function (password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

    // upload to firestore
    const uploadImageToStorage = (file) => {
      let prom = new Promise((resolve, reject) => {
        if (!file) {
          reject('No image file');
        }
        let newFileName = `${file.originalname}_${Date.now()}`;

        let fileUpload = bucket.file(newFileName);

        const blobStream = fileUpload.createWriteStream({
          metadata: {
            contentType: file.mimetype
          }
        });

        blobStream.on('error', (error) => {
          reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', () => {
          // The public URL can be used to directly access the file via HTTP.
          const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
          resolve(url);
        });

        blobStream.end(file.buffer);
      });
      return prom;
    };

    module.exports = app;
  };

