const router = require('express').Router()

const { getgigs } = require('../../controllers/index')
const session = require('../../middlewares/session')

router.get('/gigs', session, getgigs)

module.exports = router 