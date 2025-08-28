const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const indexRoute = require("./routes/index.js")
const userRoute = require("./routes/users.js")
require('dotenv').config();
const app = express();

const uri = process.env.MONGO_URI
const port = process.env.PORT;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

//db connection
mongoose.connect(uri)
.then(()=>{
    console.log("DB CONNECTED")
})
.catch(()=>{
    console.log("DB CONNECTION FAILED")
})

app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON PORT ${port}`)
})

//for index or /
app.use("/", indexRoute)

//for user/registration
app.use("/users", userRoute)

