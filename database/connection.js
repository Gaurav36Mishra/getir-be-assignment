const mongoose = require('mongoose')

const connectDB = async () => {
    const DB_CONNECTION = process.env.DB_CONNECTION
    return await mongoose.connect(DB_CONNECTION)
}

module.exports = { connectDB }