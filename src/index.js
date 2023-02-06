const express = require('express');
const route = require('./router/route')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json());

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://stuti3007:w14E1dmx6wAE1h7i@cluster0.rrvbnsb.mongodb.net/loginassign", {
    useNewUrlParser: true
})
.then(()=> console.log("Mongo is Connected"))
.catch((err)=> err)

app.use('/', route);
app.listen(3000, function(){
    console.log("express is running on port" + 3000)
})
