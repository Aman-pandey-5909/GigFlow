const router = require('express').Router()

const { postbids } = require('../../controllers/index')
const session = require('../../middlewares/session')

router.post('/bids/:gigid', session, postbids)

module.exports = router