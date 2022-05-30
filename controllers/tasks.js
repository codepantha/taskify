const Task = require('../models/Task');

const index = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const show = (req, res) => {
  res.json({ id: req.params.id })
};

const create = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const update = (req, res) => {
  res.send('Update task')
};

const destroy = (req, res) => {
  res.send('Delete task')
};

module.exports = { index, show, create, update, destroy };
