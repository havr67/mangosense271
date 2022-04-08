const http = require('http');
const { appPort, mongoUrl } = require('./config/app');
const mongoose = require('mongoose');
const app = require('./app/controllers/app')

//starts a sserver
console.log("before create server");

mongoose.connect(mongoUrl)
    .then(() => app.listen(
        appPort,
        () => console.log('API Stated'),
    ))
    .catch(() => console.error('Error connect to monogo')
);

const server = http.createServer(app);