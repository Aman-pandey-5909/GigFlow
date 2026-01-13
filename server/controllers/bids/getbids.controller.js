const Bid = require('../../models/Bid')
const Gig = require('../../models/Gig')
const asyncHandler = require('../../utils/asyncHandler')

exports.getbids = asyncHandler(async (req, res) => {
    const id = req.params.gigid
    const gig = await Gig.findById(id)
    if(!gig) {
        return res.status(404).send({ message: "Gig not found" })
    }
    if (gig.ownerId.toString() !== req.userid) {
        return res.status(401).send({ message: "Unauthorized yeah" })
    }
    const bids = await Bid.find({ gigId: id }).populate('ownerId')
    return res.status(200).send({ message: "Get bids successful", bids })
} )