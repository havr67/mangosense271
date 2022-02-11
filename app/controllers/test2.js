const express = require('express')
const url = require('url')
const routs = express.Router()



routs.get('/', (req, res, next) => {
    console.log("in / directory")
    try {
        res.status(200).json({
            success: true, 
            message: "in test2.js file, in /hello"
        })
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }

});


//for simting
routs.get('/h',(req, res, next) => {
    let urlRequest = url.parse(req.url, true); // get query like ?tag=tag
    console.log(urlRequest);
    const tag = urlRequest.query.tags;
    const sortBy = urlRequest.query.sortBy;
    const direction = urlRequest.query.direction;
    if(tag === undefined){
        console.log('2');
        checkWOTags(req, res, sortBy, direction);
    } else if (tag != undefined || sortBy != undefined || direction != undefined){
        console.log('3');
        checkForTags(req, res, tag, sortBy, direction);
    } else {
        getAll(req, res);
    }
});

module.exports = routs;