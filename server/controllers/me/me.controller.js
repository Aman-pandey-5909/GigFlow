const User = require('../../models/User')
const asyncHandler = require('../../utils/asyncHandler')

exports.me = asyncHandler(async (req, res) => {
    console.log("Request reached")
    const user = await User.findById(req.userid).populate({ path: 'jobsPosted', populate: { path: 'bids' }}).populate({ path: 'bids', populate: { path: 'ownerId' }})
    
    return res.status(200).send({ message: "Get me successful", user })
} )