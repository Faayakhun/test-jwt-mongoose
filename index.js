const express = require('express')
const app = express()
const cors = require('cors')
const {PORT, dbConfigMongo} = require('./config')
const studentRouter = require('./routes/StudentController')
const bookRouter = require('./routes/BookController')
const bookLoanRouter = require('./routes/BookLoanController')
const authRouter = require('./routes/auth')
const verifyToken = require('./middleware/authorization')

const localPort =PORT || 3000
console.log('running on',localPort)
app.use(cors)
app.use(express.json())

app.get("/", (req,res)=> {
    res.send("halo")
})

app.use(studentRouter)
app.use(bookRouter)
app.use(verifyToken, bookLoanRouter)
app.use(authRouter)



if (dbConfigMongo) {
    app.listen(PORT, ()=> {
        console.log("server running on port",PORT)
        console.log("connected to mongoDB")
    })
} else {
    console.log("not connect to mongo")
}