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

const update = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.deleteOne({ _id: id });

    if (!task)
      return res.status(404).json({ msg: `Task with id: ${id} not found ` });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { index, show, create, update, destroy };
