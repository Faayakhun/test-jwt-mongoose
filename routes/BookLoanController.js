const express = require("express")
const {BookLoan} = require("../models")

const app = express()

app.get('/bookloan', async (req,res)=>{
    const bookLoan = await BookLoan.find({}, "-__v").populate('studentID',"name").populate('bookID', '-__v')
    try {
        res.send(bookLoan)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/bookloan', async (req,res)=> {
    const bookLoan = await BookLoan.create(req.body)
    try {
        res.send(bookLoan)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app