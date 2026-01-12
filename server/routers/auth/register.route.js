const router = require('express').Router()
const user = require('../../services/validation/User')
const validate = require('../../middlewares/validatezod')

const { register } = require('../../controllers/index')

router.post('/auth/register', validate(user), register)

module.exports = router