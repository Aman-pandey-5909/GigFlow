const Gig = require("../../models/Gig");
const asyncHandler = require("../../utils/asyncHandler");

exports.getgigs = asyncHandler(async (req, res) => {
  const search = req.query.search || "";
  const gigs = await Gig.find({ title: { $regex: search, $options: "i" } });
  return res.status(200).send({ message: "Get gigs successful", gigs });
});
