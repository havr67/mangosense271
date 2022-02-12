const express = require('express')
const url = require('url')
const routs = express.Router()


routs.get('/', (req, res, next) => {
    console.log("in / directory")
    try {
        res.status(200).json({
            success: true, 
            message: "in test1.js file, in /hello"
        })
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }

});



module.exports = routs;