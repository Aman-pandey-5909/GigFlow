const router = require('express').Router()

const { postgigs } = require('../../controllers/index')
const session = require('../../middlewares/session')

const gig = require('../../services/validation/Gig')
const validate = require('../../middlewares/validatezod')

router.post('/gigs', session, validate(gig), postgigs)

module.exports = router