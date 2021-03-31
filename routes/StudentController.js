const express = require("express")
const {Student} = require("../models")

const app = express()

app.get('/student', async (req,res)=>{
    const student = await Student.find({},"-score -nomorAbsen -__v")
    try {
        res.send(student)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.get('/student/:id', async (req,res)=>{
    const student = await Student.findById(req.params.id)
    try {
        res.send(student)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/student', async (req,res)=> {
    const student = await Student.create(req.body)
    try {
        res.send(student)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app