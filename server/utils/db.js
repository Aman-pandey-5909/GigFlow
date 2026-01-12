const mongoose = require('mongoose')
const asyncHandler = require('./asyncHandler')
const { MONGO_URI } = process.env

const connectDb = asyncHandler(async () => {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to DB')
})

module.exports = connectDb