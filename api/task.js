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

// PUT /api/tasks/id

// DELETE /api/tasks/id

// export
module.exports = router;
