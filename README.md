# mangos ENSE271
Mangos ENSE 271

## To start Server 
### type in terminal "npm start"

All server side stuff is ready 
now you can add in folder __#####/app__ your components and see ho they work in the app

## how to add yours component
### in conrollers open app.js 
create your path to the file
"const test_app = require('./test')"
where "test is 'test.js'"
then create path on the server

         "app.use('/', test_app)"
                  ^ path -> http://localhost:7777/
                           ^ your path to the file
         "app.use('/hello', test1_app)"
                   ^ path -> http://localhost:7777/hello
                       
### create your file with the same name

add to your file

    const express = require('express')
    const url = require('url')
    const routs = express.Router()
    
    //your code here
    
    module.exports = routs;
    

to create post or get request just put 
    routs.get or routs.post

after that its up to you 

