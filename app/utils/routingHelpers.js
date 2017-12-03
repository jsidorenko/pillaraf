exports.exitNotFound = (exitFn) => {
  const err = new Error('No record found with the given ID');
  err.status = 404;
  exitFn(err);
};