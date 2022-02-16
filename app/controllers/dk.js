const express = require('express')
const url = require('url')
const routs = express.Router()


const msg = (message) => {
    let f = ""
    if(message === "Testing"){
        f = "success"
    } else {
        f = "fail"
    }
    return f
}


routs.get('/', (req, res, next) => {
    try {
        let urlRequest = url.parse(req.url, true)
        console.log(urlRequest);
     
        const user = urlRequest.query.user
        const user_name = urlRequest.query.user_name
        const user_email = urlRequest.query.user_email
        const message = urlRequest.query.message

        let g = msg(message)
        res.status(200).json({
            success: true, 
            user: user, 
            user_name: user_name,
            user_email: user_email, 
            message: g
        })
    } catch (e) {
        res.status(500).json({message: "error", e})
    }



module.exports = routs;