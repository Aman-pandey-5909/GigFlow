const router = require('express').Router()

const { postgigs } = require('../../controllers/index')

router.post('/gigs', postgigs)

module.exports = router