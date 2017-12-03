const {exitNotFound} = require('../utils/routingHelpers');

exports.isValidDestination = (req, res, next) => {
  // everything is ok
  if (true)
    return next();

  // incorrect data provided
  return exitNotFound(next);
};