'use stric'

var express = require('express');
var body = require('body-parser');

var ssql = require('mssql');

var http = require('http');
var path = require('path');


var app = express();

var index = require('./routes/index');
var clients = require('./routes/clients');

app.use(body.urlencoded({extended: false}));
app.use(body.json());


app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type', 'aplication/json','text/json');

    res.header('Access-Contro-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS');
    next();
})

app.use('/', index);
app.use('/clients', clients);


app.get('json/clients', function(req, res, next){

    var request = new mssql.Request();
    request.query('SELECT * FROM clients', function(err,  result){
        if(err){
            return next(err);
        }else{
            var data = {};
            data = result.recordset;
            res.send(data);
        }
    });

});

module.exports = app
