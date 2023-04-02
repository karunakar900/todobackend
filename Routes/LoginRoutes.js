const express = require('express');
const loginmodel = require('../models/loginschema');
const loginrouter = express.Router();

loginrouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginmodel.create({
            email: email,
            password: password
        });
        if (password != user.password) {
            return res.status(400).json({ status: "password is incorrect" });
        }
        res.status(201).json({
            status: "login success",
            result: user
        })
    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
})
module.exports = loginrouter;