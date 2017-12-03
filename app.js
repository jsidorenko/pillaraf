const express        = require('express');
const logger         = require('morgan');
const mongoose       = require('mongoose');
mongoose.Promise     = global.Promise;

const app = express();

const configDB = require('./config/database.js');
mongoose.connect(configDB.url, { useMongoClient: true })
  .then(() =>  console.log('Successfully connected to the database'))
  .catch((err) => {console.error(err); process.exit();});

app.use(logger('dev'));                              // log every request to the console
// app.use(bodyParser.json());                          // parse application/json
// app.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded

require('./app/routes/routes.js')(app);

module.exports = app;