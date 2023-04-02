const mongoose = require('mongoose');

const signupdata = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true }
})


const datasignup = mongoose.model("signup", signupdata);
module.exports = datasignup;