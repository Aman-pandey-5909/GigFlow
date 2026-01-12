const router = require('express').Router()

const { getbids } = require('../../controllers/index')
const session = require('../../middlewares/session')

router.get('/bids/:gigid', session, getbids)

module.exports = router