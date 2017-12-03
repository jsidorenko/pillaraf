const router = require('../utils/router')();

const WhitelistedAddress = require('../models/whitelistedAddress');
const {exitNotFound}     = require('../utils/routingHelpers');

router.getAsync('/', async (req, res, next) => {
  const destinationAddr = '123'; // @todo: extract address from request

  const record = await WhitelistedAddress.get({address: destinationAddr});

  if (!record) {
    return exitNotFound(next);
  }

  // everything is ok, do some actions here
});

module.exports = router;
