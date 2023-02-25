const express = require('express')

const app = express()

//middlewares
app.use((req,res,next) => {
    console.log("in the middlewares")
    next()
})
app.use((req,res,next) => {
    console.log("in the 2nd middlewares")
    res.send("hello ashok   ")
})



app.listen(4000)