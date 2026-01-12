const asyncHandler = require('../../utils/asyncHandler')
const Bid = require('../../models/Bid')
const User = require('../../models/User')
const Gig = require('../../models/Gig')

exports.postbids = asyncHandler(async (req, res) => {
    const gigId = req.params.gigid
    const ownerId = req.userid
    const gig = await Gig.findById(gigId)
    if(!gig) {
        return res.status(404).send({ message: "Gig not found" })
    }
    if (gig.ownerId === req.userid) {
        return res.status(401).send({ message: "Unauthorized" })
    }
    if (gig.status !== "open") {
        return res.status(401).send({ message: "Gig already assigned" })
    }
    const bid = await Bid.create({ ...req.body, gigId, ownerId })
    await User.updateOne({ _id: req.userid }, { $push: { bids: bid._id} })
    return res.status(200).send({ message: "Post bids successful", bid })
} )