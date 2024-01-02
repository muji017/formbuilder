const jwt = require('jsonwebtoken')


const generateToken = async (userId) => {
    const token = await jwt.sign({
        userId: userId
    }, 'secret');
    return token
}
const decodeToken = async (token) => {
    try {
        const decoded = await jwt.verify(token, 'secret');
        return decoded;
    } catch (error) {
        console.error(error);
        throw new Error('Token verification failed');
    }
}

module.exports = {
    generateToken,
    decodeToken
}