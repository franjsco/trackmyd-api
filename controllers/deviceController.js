const Device = require('../models/deviceModel');

function index(req, res) {
  Device.get((err, devices) => {
    if (err) {
      res.status(500).send();
    }

    res.json(devices);
  });
}

function view(req, res) {
  Device.findById(req.params.deviceId)
    .then((device) => {
      res.json(device);
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports.index = index;
module.exports.view = view;
