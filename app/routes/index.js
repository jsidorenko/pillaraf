const jsonrpc = require('jsonrpc-lite');
const router = require('../utils/router')();

const WhitelistedAddress = require('../models/whitelistedAddress');
const {exitNotFound}     = require('../utils/routingHelpers');

router.postAsync('/', async (req, res, next) => {
  console.log(req.body);

  const destinationAddress = '123'; // @todo: extract address from the request

  const record = await WhitelistedAddress.get({address: destinationAddress});

  if (!record) {
    return exitNotFound(next);
  }

  // everything is ok, do some actions here
});

module.exports = router;
