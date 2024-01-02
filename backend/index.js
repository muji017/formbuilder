const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')

dotenv.config();
const app=express()
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}))

const userRoute=require('./routes/userRoute')
app.use('/api',userRoute)
const port=3000

mongoose.connect(process.env.MONGODB)
 .then(
    console.log("Database connected"),
    app.listen(port,()=>{
        console.log('Server connected on port '+port);
    })
 )
