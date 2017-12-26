require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, { 
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0 
}, 
    function(err) {
        if(err) console.log('MongoDB: connection error -> ' + err);
        else console.log('MongoDB: successfully connected');
});
mongoose.Promise = global.Promise;

var app = express();
app.use(cors());
var NODE_PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ limit: '50mb' , extended:true}));
app.use(bodyParser.json({ limit: '50mb'}));

app.use(express.static(`${__dirname}/../dist/`, {maxAge: 31557600000}));
app.use('/static', express.static(path.join(__dirname, '/../upload_tmp/')));
require('./routes/api/workflow')(app);
require('./routes/api/workflow-status')(app);
require('./routes/api/routes')(app);
require('./routes/api/codemana')(app);
require('./routes/api/orgchart')(app);
require('./routes/api/prosub-routes')(app);
require('./routes/api/promem-routes')(app);
require('./routes/api/company')(app);
require('./routes/api/user-group')(app);
require('./routes/api/person-routes')(app);
require('./routes/api/project-routes')(app);
require('./routes/api/webform')(app);
app.listen(NODE_PORT, ()=>{
    console.log(`Server side started at ${NODE_PORT}`);
});
