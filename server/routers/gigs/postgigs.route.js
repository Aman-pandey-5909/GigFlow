const router = require('express').Router()

const { postgigs } = require('../../controllers/index')
const session = require('../../middlewares/session')

router.post('/gigs', session, postgigs)

module.exports = router