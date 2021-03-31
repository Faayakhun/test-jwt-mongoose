const jwt = require ('jsonwebtoken')
// const {JWT_KEY} = require('../config')

const verifyToken = (req,res,next) => {
    const header = req.headers("authorization")
    // const token = header.split(" ")[1]
    if(!token) throw new Error ("invalid token")
    const payload = (jwt.verify(token,"inirahasia"))

    next()
}

module.exports = verifyToken