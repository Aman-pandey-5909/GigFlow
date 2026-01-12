const Bid = require("../../models/Bid");
const Gig = require("../../models/Gig");
const User = require("../../models/User");
const asyncHandler = require("../../utils/asyncHandler");
const mongoose = require("mongoose");

exports.hire = asyncHandler(async (req, res) => {
  const { bidid } = req.params;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const bid = await Bid.findById(bidid).session(session);
    const gig = await Gig.findById(bid.gigId).session(session);
    const owner = await User.findById(gig.ownerId).session(session);

    if (owner._id.toString() !== req.userid) {
        throw new Error("Unauthorized");
    }
    
    if (!gig || gig.status !== "open") {
        throw new Error("Gig already assigned");
    }
    
    
    if (!bid || bid.status !== "pending") {
      throw new Error("Bid already accepted");
    }

    bid.status = "accepted";
    await bid.save({ session });

    gig.status = "assigned";
    gig.freelancerId = bid.userId;
    await gig.save({ session });

    await Bid.updateMany(
      { gigId: gig._id, status: "pending" },
      { status: "rejected" },
      { session }
    );

    await session.commitTransaction();
    return res.json({ message: "Hire successful" });
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
});
