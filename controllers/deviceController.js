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

function update(req, res) {
  Device.findOneAndUpdate({ _id: req.params.deviceId }, req.body, (err) => {
    if (err) {
      res.status(500).send();
    }
    res.status(200).send();
  });
}

module.exports.index = index;
module.exports.view = view;
module.exports.update = update;
