const router = require('express').Router();

router.use(require('./auth/login.route'));
router.use(require('./auth/register.route'));
router.use(require('./hiring/hire.route'));
router.use(require('./gigs/getgigs.route'));
router.use(require('./gigs/postgigs.route'));
router.use(require('./bids/getbids.route'));
router.use(require('./bids/postbids.route'));

module.exports = router;
