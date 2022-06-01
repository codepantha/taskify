const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

const index = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const show = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);

  res.status(200).json({ task });
});

const create = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const update = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  const task = await Task.findByIdAndUpdate(
    id,
    { name, completed },
    { returnDocument: 'after', runValidators: true }
  );

  res.status(200).json({ task });
});

const destroy = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.deleteOne({ _id: id });

  res.status(204).send();
});

module.exports = { index, show, create, update, destroy };
