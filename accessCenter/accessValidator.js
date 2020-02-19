const validator = require('validator')

const registerValidator =  (userInfo )=>{
    let err= {}
    if(!userInfo.fullName){
        err.name="Please Enter your  full name "
    }
    if(!userInfo.email){
        err.email="Please Enter your Email"
    }else if(!validator.default.isEmail(userInfo.email)){
        err.email="Please Enter a valid Email"
    }
    if(!userInfo.password){
        err.password="Please Enter your   Password "
    }

    return {
        error:err,
        isValid : Object.keys(err).length===0
    }
}

const loginValidator =  (userInfo )=>{
    let err= {}
    if(!userInfo.email){
        err.email="Please Enter your Email"
    }else if(!validator.default.isEmail(userInfo.email)){
        err.email="Please Enter a valid Email"
    }
    if(!userInfo.password){
        err.password="Please Enter your   Password "
    }
    
    return {
        error:err,
        isValid:Object.keys(err).length===0
    }
}
module.exports={
    registerValidator,
    loginValidator
}
