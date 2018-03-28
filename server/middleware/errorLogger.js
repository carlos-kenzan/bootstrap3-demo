module.exports = function() {
  return function logError(err, req, res, next) {
    console.log('ERROR ON ROUTE ==>>>', req.url);
    // TODO - this will actually render some error logging - you can add extra logic here.
    next();
  };
};
