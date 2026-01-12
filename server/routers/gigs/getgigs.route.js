const router = require('express').Router()

const { getgigs } = require('../../controllers/index')

router.get('/gigs', getgigs)

module.exports = router 