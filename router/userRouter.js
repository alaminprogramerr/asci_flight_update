const userRouter = require ( 'express').Router()
const accessControler = require('../accessCenter/accessControler')

userRouter.post('/api/register' , accessControler.registerControler)
userRouter.post('/api/login' , accessControler.loginControler)
userRouter.post('/api/changePassword' , accessControler.passwordChange)

module.exports=userRouter