'use strict'

const express = require("express");
const body = require("body-parser");
const sql = require("mssql");
const app = express();

app.use(body.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

const server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
});


const dbConfig = {
    user:'sa',
    password:'1054554895',
    server:'localhost',
    database:'moduleCredits'
};

const resp = {
    status: '',
    message:''
}

var conect = function($callback){
    sql.connect(dbConfig,$callback);
}

var Query = function (res, query) {
    conect((err) => {
        if (err) {
            res.send(err);
        }
        else {
            var request = new sql.Request();
            request.query(query, function (err, result) {
                if (err) {
                    res.send(err);
                }
                else {                    
                    res.send(result);
                }
                sql.close()
            });
        }
    });
}

var transaction = function (res, query) {
    conect((err) => {
        if (err) {
            resp.status = "error";
            resp.message = "Error while connecting database :- " + err;
            res.send(resp);
        }
        else {
            var transaction = new sql.Transaction()
            transaction.begin(err => {
                if (err){
                    resp.status = "error"
                    resp.message = err
                    res.send(resp)
                }
             
                const request = new sql.Request(transaction)
                request.query(query, (err, result) => {
                    if (err){
                        resp.status = "error"
                            resp.message = err
                            res.send(resp)
                    }
             
                    transaction.commit(err => {
                        if (err){
                            resp.status = "error"
                            resp.message = err
                            res.send(resp)
                        }
                        resp.status = "success"
                        resp.message = "client added"
                        res.send(resp)
                        sql.close()
                    });
                })
            })
        }
    });
    
}

app.get("/api/v1/clients", function (req, res) {
    var query = "SELECT * FROM [client]";
    Query(res, query);
});

app.get("/api/v1/clients/:document", function (req, res) {
    let document = req.params.document;
    var query = `SELECT * FROM [client] WHERE doc = '${document}'`;
    Query(res, query);
});

app.post("/api/v1/clients", function (req, res) {
    
    var query = `INSERT INTO [client](doc, name, lastName, brihtday, company, nitCompany, salary, dateAdmision)
     VALUES ('${req.body.document}', 
     '${req.body.name}', 
     '${req.body.lastName}', 
     '${req.body.birthDate}', 
     '${req.body.nameCompany}', 
     '${req.body.nitCompany}',  
     '${req.body.salary}',  
     '${req.body.dateLog}')`;
    transaction(res, query)
    
});

app.get("/api/v1/credit/:document", function (req, res) {
    let document = req.params.document;
    var query = `SELECT * FROM [credit] WHERE docClient='${document}'`;
    Query(res, query);
});

app.post("/api/v1/credit", function (req, res) {
    var query = `INSERT INTO [credit] (idCredit,docClient,amount)
    VALUES('${req.body.idCredit}', '${req.body.docClient}', '${req.body.amount}')`;
    transaction(res, query)
});
