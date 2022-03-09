const Record = require('../../models/record')

async function getRecords(req, res) {
    try {
        const { body = {}} = req
        const { startDate, endDate, minCount, maxCount } = body
        const query = [
            {
                $project: {
                  key: '$key',
                  createdAt: '$createdAt',
                  totalNumber: {
                    $sum: '$counts'
                  },
                  _id: 0
                }
              },
              {
                $match: {
                  createdAt: {
                    $gte: new Date(startDate),
                    $lt: new Date(endDate)
                  },
                  totalNumber: {
                    $gte: minCount,
                    $lte: maxCount
                  }
                }
        
              }
        ]
        const records = await Record.aggregate(query)
        res.status(200).json({
            code: 0,
            msg: 'Success',
            records: records
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = { getRecords }