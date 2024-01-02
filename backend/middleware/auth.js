const dotenv = require('dotenv');
const userModel = require('../models/userModel');
const util=require('../utilities/utilities')


const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
      return res.status(401).json({ error: 'Authorization header is missing' });
    }
    const tokenParts = authHeader.split(" ");
    
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ error: 'Invalid Authorization header format' });
    }
    const token = tokenParts[1];
    const payload=await util.decodeToken(token)
    const userId = payload.userId
    
    const user = await userModel.findOne({ _id: userId })
    if (user) {
      req.userId = userId
      next()
    }
  } catch (error) {
  
  }
}

module.exports = {
  checkAuth
}