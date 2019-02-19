const express = require('express');
const deviceController = require('./controllers/deviceController');

const router = express.Router();

router
  .route('/devices')
  .get(deviceController.index);

router
  .route('/devices/:deviceId')
  .get(deviceController.view);

module.exports = router;
