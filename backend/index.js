const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config();
const app=express()
const port=3000

mongoose.connect(process.env.MONGODB)
 .then(
    console.log("Database connected"),
    app.listen(port,()=>{
        console.log('Server connected on port '+port);
    })
 )
