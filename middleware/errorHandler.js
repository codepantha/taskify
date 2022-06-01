const mongoose = require('mongoose');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof mongoose.Error.CastError)
    return res.status(404).json({ msg: 'Task not found' });
  res.status(500).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
