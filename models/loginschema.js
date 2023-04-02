const mongoose = require('mongoose');


const logindata = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})


const datalogin = mongoose.model("login", logindata);
module.exports = datalogin;