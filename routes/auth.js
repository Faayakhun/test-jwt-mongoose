const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Student} = require('../models')
// const {JWT_KEY} = require('../config')

const app = express()

app.post('/register',async (req,res)=> {
    const user = req.body
    bcrypt.hash(user.password,10, async function(err,hash){
        const student = await Student.create({
            name: user.name,
            password: hash
        })
    
    try {
        res.json({
            message:"user added successfully",
            data: student
        })
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
    })
    
})

app.post('/login', async (req,res)=> {
    const {name,password} = req.body
    let user = await Student.findOne({name})
    if (user ) {
        if (bcrypt.compareSync(password, user.password)){
            user = user.toObject()
            const {password, ...payload} = user
            const token = jwt.sign(payload, "inirahasia")
            res.json({
                message: "login success",
                token
            })
        } else {
            res.json({
                message: "invalid login credentials"
            })
        }
        
    }
    
})

module.exports = app