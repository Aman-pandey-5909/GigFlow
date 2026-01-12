const router = require('express').Router()
const user = require('../../services/validation/User')
const validate = require('../../middlewares/validatezod')

const { login } = require('../../controllers/index')

router.post('/auth/login', validate(user), login)

module.exports = router