const express=require('express')
const userController=require('../controllers/userController')
const formController=require('../controllers/formController')
const auth=require('../middleware/auth')

const userRoute=express()
const bodyparser=require('body-parser');
userRoute.use(bodyparser.json());
userRoute.use(bodyparser.urlencoded({extended:true}));

// user
userRoute.post('/login',userController.login)
userRoute.post('/signup',userController.signUp)

// forms
userRoute.post('/createForm',auth.checkAuth,formController.createForm)
userRoute.get('/getForms',auth.checkAuth,formController.getForms)
userRoute.delete('/deleteForm',auth.checkAuth,formController.deleteForm)

module.exports=userRoute