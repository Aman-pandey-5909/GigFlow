const router = require('express').Router()

const { hire } = require('../../controllers/index')
const session = require('../../middlewares/session')

router.post('/bids/:bidid/hire', session, hire)

module.exports = router