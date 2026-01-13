const router = require('express').Router()

const { me } = require('../../controllers/index')
const session = require('../../middlewares/session')

router.get('/me', session, me)

module.exports = router