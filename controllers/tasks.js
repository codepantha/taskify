const index = (req, res) => {
  res.send('All tasks');
};

const show = (req, res) => {
  res.json({ id: req.params.id })
};

const create = (req, res) => {
  res.status(201).json(req.body)
};

const update = (req, res) => {
  res.send('Update task')
};

const destroy = (req, res) => {
  res.send('Delete task')
};

module.exports = { index, show, create, update, destroy };
