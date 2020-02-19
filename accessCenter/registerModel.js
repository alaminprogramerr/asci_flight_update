const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  registerSchema =  new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fbLink:{
        type:String
    },
    twitterLink:{
        type:String
    }
})

const registerModel= mongoose.model('registerModel' , registerSchema)
module.exports= registerModel