const jsonrpc            = require('jsonrpc-lite');
const EthereumRPC        = require('ethereum-rpc');

const router             = require('../utils/router')();
const WhitelistedAddress = require('../models/whitelistedAddress');
const configEthRPC       = require('../../config/ethereumRPC');

const {exitNotFound, exitRequestError} = require('../utils/routingHelpers');

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

  // everything is ok, send the transaction
  const ethRPC = new EthereumRPC(configEthRPC.url);

  ethRPC.on('open', eth => {
    console.log('Connected to the Ethereum network.');

    eth('eth_sendTransaction', [transaction], (err, result) => {
      if (err) {
        return exitRequestError(next, err);
      }
      res.json(result);
    });
  });
});

module.exports = router;

// @todo: move to utils or middleware
function getTransaction(request = {}) {
  if (!request.params || !request.params.length) return null;
  return request.params[0];
}

function isValidTransaction(transaction = {}) {
  console.log(transaction);

  if (!transaction.from)     return false;
  if (!transaction.to)       return false;
  if (!transaction.gas)      return false;
  if (!transaction.gasPrice) return false;
  if (!transaction.value)    return false;
  if (!transaction.data)     return false;

  return true;
}
