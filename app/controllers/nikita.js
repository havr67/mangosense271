const express = require('express')
const url = require('url')
const User = require('../models/user')
const Order = require('../models/order')
const order = require('../models/order')
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

const checkchoosenoption = (option) =>{
    let f = ""
    if(option === "option1"){
        f = "You choosed option 1, which is ....."
    }
    if(option === "option2"){
        f = "You choosed option 2, which is ....."
    }
    if(option === "option3"){
        f = "You choosed option 3, which is ....."
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
        res.status(200).json({
            success:true
        })
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})


//Creates user
routs.get('/user', (req, res, next) => {
    try {
        let urlRequest = url.parse(req.url, true)
        console.log(urlRequest);
        //console.log(urlRequest)
        const name = urlRequest.query.name
        const email = urlRequest.query.email 
        const phone = urlRequest.query.phone
        const income = urlRequest.query.income
        const user = new User({
            name: name,
            email: email,
            phone: phone,
            income: income
        })

        user.save()
        res.status(201).json({message: "User was created"})
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
            createdListing: user
        });
    } catch (e) {
        res.status(500).json({message: "something went wrong1"});
    }
})


//Prints all users
routs.get('/getuser', (req, res, next) => {
    try {

        user = User.find().exec()
        .then(all => res.status(200).json(all))
        .catch(err => res.status(500).json({error: err}))
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})


//Prints specific user
routs.get('/getusername', (req, res, next) => {
    try {
        let urlRequest = url.parse(req.url, true)
        const name = urlRequest.query.name
        const email = urlRequest.query.email

        let user = User.findOne({name:name, email:email})
        .exec()
        .then(user => {
            res.status(200).json({
                name: user.name,
                email: user.email,
                income: user.income
            });
        })
        .catch(err => res.status(500).json({error: err}));

    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})


//Creates new order
routs.get('/crateneworder', (req, res, next) => {
    try {
        let urlRequest = url.parse(req.url, true)
        const option = urlRequest.query.option
        const recipient = urlRequest.query.recipient
        const address = urlRequest.query.address
        const comments = urlRequest.query.comments

        const order = new Order({
            option: option,  
            recipient: recipient,
            address: address,
            comments: comments
        })
        order.save()
        res.status(201).json({message: "Order was created"})
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})


//Prints all orders
routs.get('/getorder', (req, res, next) => {
    try {
        order = Order.find().exec()
        .then(all => res.status(200).json(all))
        .catch(err => res.status(500).json({error: err}))
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})



// Confirms specific order
routs.get('/confirmorder', (req, res, next) => {
    try {
        let urlRequest = url.parse(req.url, true)

    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})



// Returns FAQ indexes
routs.get('/faq', (req, res, next) => {
    try {
        const message = "Sign Up Help"
        const message1 = "Sign Up can be done in our Bot system"
        const message2 = "1. Click our friendly blue chatbot bottom right"
        const message3 = "2. Follow the instructions"
        const message4 = "3. Only one account per family * All accounts are keeping as private privacy"
        const message5 = "4. Type menu to start"
        res.status(200).json({
            topic: message,
            line1: message1,
            line2: message2,
            line3: message3,
            line4: message4,
            line5: message5
        })
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})


// Returns FAQ user manual 
routs.get('/pickupoptions', (req, res, next) => {
    try {
        res.status(200).json({
            topic: "You chose Pick Up options",
            line1: "Sign Up can be done in our Bot system",
            line2: "1. Click our friendly blue chatbot bottom right",
            line3: "2. Follow the instructions",
            line4: "3. Only one account per family",
            line5: "* All accounts are keeping as private privacy"
        })
    } catch (e) {
        res.status(500).json({message: "something went wrong", e})
    }
})



module.exports = routs;