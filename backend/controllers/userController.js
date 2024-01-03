const userModel = require('../models/userModel')
const util = require('../utilities/utilities')

const login = async (req, res) => {
    try {
        let { email, password } = req.body
        let userData = await userModel.findOne({ email: email })
        if (userData) {
            let token = await util.generateToken(userData._id)
            return res.status(200).json({
                email: userData.email,
                token: token
            })
        }
        res.status(403).json({
            message:"Invalid email and password"
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went worng"
        })
    }
}
const signUp=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        const newUser = new userModel({ email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully'});
    } catch (error) {
        res.status(500).json({
            message:"Something went worng"
        })
    }
}
module.exports = {
    login,
    signUp
}