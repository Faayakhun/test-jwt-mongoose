const mongoose = require('mongoose')

const BookLoanSchema = new mongoose.Schema({
    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    bookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
    }
})

const BookLoan = mongoose.model("bookloan", BookLoanSchema)
module.exports = BookLoan