const express = require('express')
const routes = require('./api/routes')

const app = new express()

app.use(express.json())
app.use('/', routes)

module.exports = app