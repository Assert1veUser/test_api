const express= require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const app= express();
const connect = require('./backend/back_mongodb');
const port = 8080;

require('./route')(app, {});
app.listen(port, () => {
    console.log('We are live on ' + port);
});