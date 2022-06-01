const notFound = (req, res) =>
  res.status(404).send('Ooops! That route does not exist...');

module.exports = notFound;
