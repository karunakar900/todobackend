const express = require('express');
const signupmodel = require('../models/signupschema');
const signuprouter = express.Router();


signuprouter.post("/register", async (req, res) => {
    const { email, password, confirmpassword } = req.body;

    try {
        const newuser = await signupmodel.create({
            email: email,
            password: password,
            confirmpassword: confirmpassword
        })
        if (password != confirmpassword) {
            return res.status(200).json({ status: "passwords do not match" });

        }
        res.status(201).json({
            status: "user registered successfully",
            result: newuser
        })
    } catch (e) {
        res.status(404).json({
            status: "registration failed",
            message: e.message
        })
    }
})

module.exports = signuprouter;