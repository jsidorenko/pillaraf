const jsonrpc = require('jsonrpc-lite');
const router = require('../utils/router')();

const WhitelistedAddress = require('../models/whitelistedAddress');
const {exitNotFound}     = require('../utils/routingHelpers');

router.postAsync('/', async (req, res, next) => {
  const transaction = getTransaction(req.body);
  if (!isValidTransaction(transaction)) {
    return exitNotFound(next);
  }

  const destinationAddress = transaction.to;
  const record = await WhitelistedAddress.get({address: destinationAddress});

  if (!record) {
    return exitNotFound(next);
  }

  // everything is ok, do some actions here
});

module.exports = router;

// @todo: move to utils or middleware
function getTransaction(request = {}) {
  if (!request.params || !request.params.length) return null;
  return request.params[0];
}

function isValidTransaction(transaction = {}) {
  if (!transaction.from)     return false;
  if (!transaction.to)       return false;
  if (!transaction.gas)      return false;
  if (!transaction.gasPrice) return false;
  if (!transaction.value)    return false;
  if (!transaction.data)     return false;

  return true;
}
