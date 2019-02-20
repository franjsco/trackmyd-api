const express = require('express');
const deviceController = require('./controllers/deviceController');

const router = express.Router();

router
  .route('/devices')
  .get(deviceController.index);

router
  .route('/devices/:deviceId')
  .get(deviceController.view)
  .put(deviceController.update)
  .patch(deviceController.update);

module.exports = router;
