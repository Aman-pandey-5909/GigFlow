const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    jobsPosted: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Gig",
        default: []
    },
    bids: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Bid",
        default: []
    }
});

module.exports = mongoose.model("User", userSchema);