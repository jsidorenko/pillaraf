const index = require('./index');
const {isValidDestination} = require('./middlewares');

module.exports = (app) => {
  app.use('/', isValidDestination, index);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    const result = {
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
    };
    res.status(err.status || 500).json(result);
  });
};