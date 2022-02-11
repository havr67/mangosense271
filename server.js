const http = require('http');
const { appPort } = require('./config/app');
const app = require('./app/controllers/app')

//starts a sserver
console.log("before create server");

app.listen(appPort, () => {
    console.log('Application listening on port 7777!');
});

const server = http.createServer(app);