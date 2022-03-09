const mongoose = require('mongoose')

const connectDB = async () => {
    const DB_CONNECTION = process.env.DB_CONNECTION || "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true"
    return await mongoose.connect(DB_CONNECTION)
}

module.exports = { connectDB }
