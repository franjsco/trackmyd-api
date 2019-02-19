const express = require('express');
const deviceController = require('./controllers/deviceController');

const router = express.Router();

router
  .route('/devices')
  .get(deviceController.index);

module.exports = router;
