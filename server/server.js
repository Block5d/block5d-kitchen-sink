require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });
mongoose.Promise = global.Promise;

var app = express();
app.use(cors());
var NODE_PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ limit: '50mb' , extended:true}));
app.use(bodyParser.json({ limit: '50mb'}));

app.use(express.static(`${__dirname}/../dist/`, {maxAge: 31557600000}));
app.use('/static', express.static(path.join(__dirname, '/../upload_tmp/')))
require('./routes')(app);

app.listen(NODE_PORT, ()=>{
    console.log(`Server side started at ${NODE_PORT}`);
});
