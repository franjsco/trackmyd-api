const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const { db } = config;
const app = express();
const port = process.env.PORT || config.app.port;

const connectionString = `${db.prefix}${db.user}:${db.password}@${db.host}/${db.database}`;

console.log(connectionString);

mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const mongodb = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`trackmyd-api running. PORT: ${port}`);
});