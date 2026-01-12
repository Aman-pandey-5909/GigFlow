const Gig = require('../../models/Gig')
const User = require('../../models/User')
const asyncHandler = require('../../utils/asyncHandler')

exports.postgigs = asyncHandler(async (req, res) => {
    const creategig = await Gig.create({ ...req.body, ownerId: req.userid })
    await User.updateOne({ _id: req.userid }, { $push: { jobsPosted: creategig._id} })
    return res.status(200).send({ message: "Post gigs successful", gig: creategig })
} )