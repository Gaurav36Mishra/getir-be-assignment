const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    key: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: {
        type: [Number]
    },
    value: {
        type: String
    }
})

module.exports = recordSchema