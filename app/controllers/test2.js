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
    let urlRequest = url.parse(req.url, true) // get query like ?tag=tag
    console.log(urlRequest)
});

routs.post('/', (req, res) => {
    res.status(200).json({
        message: 'API works'
    })
});



module.exports = routs;