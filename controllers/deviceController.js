const Device = require('../models/deviceModel');

function index(req, res) {
  Device.get((err, devices) => {
    if (err) {
      res.status(500).send();
    }

    res.json(devices);
  });
}

module.exports.index = index;
