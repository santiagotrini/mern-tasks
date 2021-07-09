// imports
const express = require('express');
const Task = require('../models/Task');
// router
const router = express.Router();
// api endpoints
// GET /api/tasks
router.get('/tasks', (req, res) => {
  Task.find().exec((err, tasks) => {
    res.status(200).json(tasks);
  });
});
// GET /api/tasks/id

// POST /api/tasks
router.post('/tasks', (req, res) => {
  const { text } = req.body;
  const task = new Task({
    text
  });
  task.save((err, task) => {
    res.status(201).json(task);
  });
});
// DELETE /api/tasks/id
router.delete('/tasks/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id).exec(() => {
    res.status(200).json({ msg: 'Task deleted' });
  });
});
// PUT /api/tasks/id
router.put('/tasks/:id', (req, res) => {
  const { done } = req.body;
  const task = { done };
  const options = {
    new: true,
    omitUndefined: true
  };
  Task
    .findByIdAndUpdate(req.params.id, task, options)
    .exec((err, task) => {
      res.status(200).json(task);
    });
});
// export
module.exports = router;
