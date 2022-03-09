const { body, validationResult } = require('express-validator')
const recordValidationRules = () => {
    return [
      body('startDate', 'invalid start date, it should be of format YYYY-MM-DD').isDate(),
      body('endDate', 'invalid end date, it should be of format YYYY-MM-DD').isDate(),
      body('maxCount', 'maxCount should be an integer.').toInt().isInt(),
      body('minCount', 'minCount should be an integer.').toInt().isInt()
  
    ]
  }
  
const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(400).json({
      code: 1,
      msg: 'validation errors',
      errors: extractedErrors
    })
}

  module.exports = {
    recordValidationRules,
    validate
  }