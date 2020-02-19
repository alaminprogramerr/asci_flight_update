const registerModel = require('./registerModel')
const validator = require('./accessValidator')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const registerControler = (req, res )=>{
    let verify = validator.registerValidator(req.body)
    let {fullName, email, password, fbLink , twitterLink}= req.body
    if(!verify.isValid){
        return res.status(400).json({message:"Validation failed " , error : verify.error})
    }
    registerModel.findOne({email:req.body.email})
    .then(user=>{
        if(user){
            return res.status(400).json({message:"User exist !"})
        }
    })
    bcrypt.hash(req.body.password, 13 , (err, hash)=>{
        if(err){
            return res.status(500).json({message:"Server error occurd while  hashing password !!"})
        }
        new registerModel({
            fullName:fullName,
            email:email, 
            password:hash,
            fbLink:fbLink,
            twitterLink:twitterLink
        }).save()
        .then(user=>{
            return res.status(200).json({message:"Register successfull !" , user})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({message:"server error occurd while creating user !!"})
        })
    })

}

const loginControler =(req, res)=>{
    const verify = validator.loginValidator(req.body)
    if(!verify.isValid){
        return res.status(400).json({message:"Validation failed  , Please give Email and Password" , error:verify.error})
    }
    registerModel.findOne({email:req.body.email})
    .then(user=>{
        if(!user){
            return res.status(400).json({message:"User Not found"})
        }
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(err){
                return res.status(500).json({message:"server error occurd  !!"})
            }
            if(!result){
                return res.status(400).json({message:"Wrong password provided !!"})
            }
            let token = JWT.sign({
                name:user.fullName,
                id:user._id,
                email:user.email
            } , "register" , {expiresIn:"4h"})
            res.status(200).json({message:"Login successfull ! " , token:`bearer ${token}`})
        })
    })
}
const passwordChange = (req, res )=>{
    console.log(req.body)
    if(!req.body.email|| !req.body.oldPassword || !req.body.newPassword ){
        return res.status(400).json({message:"Email , old password , new password is required"})
    }
    registerModel.findOne({email:req.body.email})
    .then(user=>{
        if(!user){
            return res.status(400).json({message:"User not found "})
        }
        bcrypt.compare(req.body.oldPassword, user.password, (err, result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({message:"server error occurd  !!"})
            }
            if(!result){
                return res.status(400).json({message:"Wrong password provided !!"})
            }
            
            bcrypt.hash(req.body.newPassword, 13 , (err, hash)=>{
                if(err){
                    console.log(err)
                    return res.status(500).json({message:"Server error occurd while  hashing password !!"})
                }
                
            registerModel.findOne({email:req.body.email})
            .then(user=>{
                user.fullName=req.body.name
                user.password=hash
                user.save()
                .then(user=>{
                    return res.status(200).json({message:"Profile updated successfull !"})
                })
                .catch(err=>{
                    console.log()
                    return res.status(500).json({message:"server error "})
                })
            })
            })
        })
    })
}
module.exports={
    registerControler,
    loginControler,
    passwordChange
}