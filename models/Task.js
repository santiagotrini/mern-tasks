// imports
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// task schema
const TaskSchema = new Schema({
  text: String,
  done: { type: Boolean, default: false }
});
// model
const Task = mongoose.model('Task', TaskSchema);
// export
module.exports = Task;
