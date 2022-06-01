const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

const index = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const show = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);

  if (!task) {
    const error = new Error(`Task not found`)
    error.status = 404;
    return next(error)
  }
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

  if (!task)
    return res
      .status(404)
      .json({ msg: 'Error! Cannot update non-existent task.' });

  res.status(200).json({ task });
});

const destroy = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.deleteOne({ _id: id });

  if (!task)
    return res.status(404).json({ msg: `Task with id: ${id} not found ` });

  res.status(204).send();
});

module.exports = { index, show, create, update, destroy };
