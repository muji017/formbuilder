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

module.exports = {
    login,
}