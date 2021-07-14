// ./index.js (backend entry point)
// imports
const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
// config vars
const PORT = process.env.PORT || 4000;
const DB   = process.env.DB   || 'mongodb://localhost/todo';
// app instance
const app = express();
// db connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.log(err));
// middlewares
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
// api router
app.use('/api', require('./api/task'));
// listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
