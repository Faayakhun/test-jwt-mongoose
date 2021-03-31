const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    edition: Number
})

const Book = mongoose.model("book", BookSchema)
module.exports = Book