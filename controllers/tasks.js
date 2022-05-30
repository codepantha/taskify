const Task = require('../models/Task');

const index = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const show = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findById(taskId);

    if (!task)
      return res.status(404).json({ msg: `No task with id: ${taskId}` });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const create = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const update = (req, res) => {
  res.send('Update task');
};

const destroy = (req, res) => {
  res.send('Delete task');
};

module.exports = { index, show, create, update, destroy };
