const { Router } = require('express')
const router = new Router()

const recordRoutes = require('./modules/records/routes')

recordRoutes(router)

module.exports = router