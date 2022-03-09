const { getRecords } = require('./record')
const { validate, recordValidationRules } = require('./validator')

const routes = router => {
    router.post('/records', recordValidationRules(), validate, (req, res) => getRecords(req, res))
}

module.exports = routes