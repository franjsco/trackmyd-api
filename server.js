const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const config = require('./config');
const logger = require('./logger');
const apiRoutes = require('./apiRoutes');

const { db } = config;
const app = express();
const port = process.env.PORT || config.app.port;

const connectionString = `${db.prefix}${db.user}:${db.password}@${db.host}/${db.database}`;

mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use((err, req, res, next) => {
  logger.logError(err);
  res.status(500);
  next();
});

app.use(basicAuth({ users: config.app.auth.users }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(port, () => {
  logger.logInfo('Server started.');
  logger.logConsole('Server started.');
});

process.on('uncaughtException', (err) => {
  logger.logError(err);
});

process.on('SIGINT', () => {
  mongoose.connection.close();
  logger.logInfo('Server stopped');
  logger.logConsole('Server stopped');
  process.exit(0);
});
