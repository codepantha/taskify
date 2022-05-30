const Task = require('../models/Task');

const index = (req, res) => {
  res.send('All tasks');
};

const show = (req, res) => {
  res.json({ id: req.params.id })
};

const create = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json(task)
};

const update = (req, res) => {
  res.send('Update task')
};

const destroy = (req, res) => {
  res.send('Delete task')
};

module.exports = { index, show, create, update, destroy };
