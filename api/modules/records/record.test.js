const app = require('../../../app')
const request = require('supertest')
const mongoose = require('mongoose')
const { beforeAll, afterAll } = require('jest-circus')

beforeAll(async() => {
    await mongoose.connect(process.env.DB_CONNECTION)
})

afterAll(async() => {
    await mongoose.connection.close()
})

describe('POST /records', () => {
    it('records -> with no data -> validation errors', async () => {
      const response = await request(app)
        .post('/records')
        .send({})
      expect(response.statusCode).toEqual(400)
      expect(response.body.msg).toEqual('validation errors')
      expect(response.body.code).toEqual(1)
    })
  
    it('records -> with invalid data -> validation errors', async () => {
      const response = await request(app)
        .post('/records')
        .send({
          startDate: '2019-01-01',
          endDate: '2019-01-11',
          minCount: 10,
          maxCount: 50
        })
      expect(response.statusCode).toEqual(400)
      expect(response.body.msg).toEqual('validation errors')
      expect(response.body.code).toEqual(1)
      expect(response.body.errors).toEqual([
        {
          startDate: 'start date should be a valid date of format YYYY-MM-DD'
        }
      ])
    })
  
    it('records -> with all data -> success response', async () => {
      const response = await request(app)
        .post('/records')
        .send({
          startDate: '2016-01-26',
          endDate: '2018-02-02',
          minCount: 10,
          maxCount: 50
        })
      expect(response.statusCode).toEqual(200)
      expect(response.body.msg).toEqual('Success')
      expect(response.body.records.length).toBeGreaterThan(0)
    })
  })