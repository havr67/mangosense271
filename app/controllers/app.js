const express = require('express')
const app = express()

console.log("app started"); //Nice

const test_app = require('./test') //code  
const test1_app = require('./test1')
const test2_app = require('./test2')
const dk_test = require('./dk')
const yx_test = require('./mytest')
const nikita = require('./nikita')

//CORS set up 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//use json for url encode
app.use(express.json());
    app.use(express.urlencoded({
     extended: true
}));

app.use('/', test_app)
app.use('/hello', test1_app) 
app.use('/g', test2_app)
app.use('/testing', dk_test)
app.use('/testtesttest',yx_test)
app.use('/nikita', nikita)

// here we have error hadaling 
app.use((req, res, next) => {
    const error = new Error('Api not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;

