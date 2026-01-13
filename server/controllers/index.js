module.exports = {
    ...require('./auth/login.controller'),
    ...require('./auth/register.controller'),
    ...require('./hiring/hire.controller'),
    ...require('./gigs/getgigs.controller'),
    ...require('./gigs/postgigs.controller'),
    ...require('./bids/getbids.controller'),
    ...require('./bids/postbids.controller'),
    ...require('./me/me.controller')
}