const router = require('express').Router()
const {loginUser} = require('../../services/validation/User')
const validate = require('../../middlewares/validatezod')

const { login } = require('../../controllers/index')

router.post('/auth/login', validate(loginUser), login)

module.exports = router