const User = require('../../models/User')
const asyncHandler = require('../../utils/asyncHandler')
const bcrypt = require('bcrypt')

exports.register = asyncHandler(async (req, res) => {
    const userExists = await User.exists({ email: req.body.email })
    if(userExists) {
        return res.status(404).send({ message: "User already exists" })
    }
    const encryptPassword = await bcrypt.hash(req.body.password, 10)
    await User.create({ ...req.body, password: encryptPassword })
    return res.status(200).send({ message: "User created successfully" }) 
} )