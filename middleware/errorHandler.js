const errorHandlerMiddleware = (err, req, res, next) => {
  res
    .status(500)
    .json({ msg: 'Ooops! Something bad happened. Please try later.' });
};

module.exports = errorHandlerMiddleware;
