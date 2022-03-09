const mongoose = require('mongoose')

const recordS = require('../schemas/record')

const Record = mongoose.model('Record', recordS)

module.exports = Record