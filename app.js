const express = require('express');
const mongoose = require('mongoose');
const data_router = require('../backend/Routes/LoginRoutes');
const signuprouter = require('../backend/Routes/SignupRoutes');
const app = express();

const mongourl = "mongodb+srv://project1:YYVPBNOyIYxaL4Se@cluster0.ym3snb9.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongourl, {
    UseNewUrlParser: true,
}).then(() => {
    console.log("connected to databese");
}).catch = (error) => {
    console.log(error);
}



app.use(express.json());


app.use("/", data_router);
app.use("/", signuprouter);


app.listen(3000, () => {
    console.log("server is up at 3000");
});




