const router = require('express').Router()

const { getbids } = require('../../controllers/index')

router.get('/bids/:gigid', getbids)

module.exports = router