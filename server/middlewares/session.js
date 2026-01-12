const User = require('../models/User')
const asyncHandler = require('../utils/asyncHandler')
const jwt = require('jsonwebtoken')

module.exports = asyncHandler(async (req, res, next) => {
    const session = req.cookies.session
    if(!session) {
        throw new Error('Unauthorized')
    }
    const decoded = jwt.verify(session, process.env.JWT_SECRET)
    const user = await User.exists({ _id: decoded.userId })
    if(!user) {
        throw new Error('Unauthorized')
    }
    req.userid = decoded.userId
    next()
})

