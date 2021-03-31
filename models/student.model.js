const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    score: Number,
    nomorAbsen: Number
})

const Student = mongoose.model("student", StudentSchema)
module.exports = Student