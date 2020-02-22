const app = require('express')()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const userRouter = require('./router/userRouter')
// const morgan = require('morgan')
const flightRouter= require('./router/flightRouter')
const cors = require('cors')
//database connnection
mongoose.connect('mongodb://selim12:selim12@ds051788.mlab.com:51788/appdata' , { useUnifiedTopology:true, useNewUrlParser:true})
const db = mongoose.connection
db.on('open' , ()=>{
    console.log('Database connected !')
})
db.on('error' , ()=>{
    console.log('Database connection faild !')
})

// user middleware and other 
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(morgan('dev'))
app.use(userRouter)
app.use(flightRouter)
//server connection
app.listen(PORT, ()=>{console.log(  `server running on port ${PORT}`)})