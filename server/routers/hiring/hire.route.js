const router = require('express').Router()

const { hire } = require('../../controllers/index')

router.post('/bids/:bidid/hire', hire)

module.exports = router