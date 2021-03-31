const express = require("express")
const {Book} = require("../models")

const app = express()

app.get('/book', async (req,res)=>{
    const book = await Book.find({})
    try {
        res.send(book)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/book', async (req,res)=> {
    const book = await Book.create(req.body)
    try {
        res.send(book)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app