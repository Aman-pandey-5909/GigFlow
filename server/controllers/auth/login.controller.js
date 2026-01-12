const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const asyncHandler = require('../../utils/asyncHandler')
const bcrypt = require('bcrypt')

exports.login = asyncHandler(async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email })
    if(!userExists) {
        return res.status(404).send({ message: "User not found" })
    }
    const passwordMatch = await bcrypt.compare(req.body.password, userExists.password)
    if(!passwordMatch) {
        return res.status(401).send({ message: "Invalid credentials" })
    }
    const token = jwt.sign({ userId: userExists._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.cookie('session', token, { httpOnly: true })
    return res.status(200).send({ message: "Login successful" }) 
} )