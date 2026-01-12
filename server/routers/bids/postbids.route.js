const router = require('express').Router()

const { postbids } = require('../../controllers/index')

router.post('/bids', postbids)

module.exports = router