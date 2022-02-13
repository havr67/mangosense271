const express = require('express')
const url = require('url')
const routs = express.Router()


const fun = (message) => {
    let f = ""
    if(message === "I want food"){
        f = "succes"
    } else {
        f = "unsucces"
    }
    return f
}

routs.get('/', (req, res, next) => {
    //console.log("Nikitas app");
    try {
        let urlRequest = url.parse(req.url, true)
        console.log(urlRequest);
        //console.log(urlRequest)
        const user = urlRequest.query.user
        const user_id = urlRequest.query.user_id 
        const message = urlRequest.query.message

        let g = fun(message)
        res.status(200).json({
            success: true, 
            user: user, 
            user_id: user_id, 
            message: g
        })
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }

});

routs.get('/ds', (req, res, next) => {
    try {
        
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})


// for you to test out 
routs.post('/', (req, res, next) => {
    try {
        const user = {
            user: req.body.user,
            user_id: req.body.user_id
        };

        res.status(200).json({
            message: 'Updated Listing',
            createdListing: listing
        });
    } catch (e) {
        res.status(500).json({message: "something went wrong1"});
    }
})



module.exports = routs;