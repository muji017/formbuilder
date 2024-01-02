const express=require('express')
const userController=require('../controllers/userController')
const formController=require('../controllers/formController')
const auth=require('../middleware/auth')

const userRoute=express()
const bodyparser=require('body-parser');
userRoute.use(bodyparser.json());
userRoute.use(bodyparser.urlencoded({extended:true}));

userRoute.post('/login',userController.login)
userRoute.post('/createForm',auth.checkAuth,formController.createForm)

module.exports=userRoute