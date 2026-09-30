const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res)=> {
    try{
        const  {name,email,password } = req.body;

        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({message: "User already exist"});

           }
         
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await User.create({
            name,
            Email,
            password: hashedPassword,

        });

        res.status(201).json({message: " User register Successfully"});

  } catch(err){
    res.status(500).json({ message: err.message});
  }


});

module.exports = router;