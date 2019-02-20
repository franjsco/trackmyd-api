const Device = require('../models/deviceModel');

function index(req, res) {
  if (req.query.name) {
    console.log(req.query.name);
    Device.findOne({ name: req.query.name }, (err, device) => {
      if (!device) {
        res.status(404).send();
      } else {
        res.json(device);
      }
    });
  } else {
    Device.get((err, devices) => {
      if (err) {
        res.status(500).send();
      }
      res.json(devices);
    });
  }
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

function add(req, res) {
  const device = new Device(req.body);
  device
    .save()
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(500).send();
    });
}

function remove(req, res) {
  Device.deleteOne({ _id: req.params.deviceId }, (err) => {
    if (err) {
      res.status(500).send();
    }
    res.status(200).send();
  });
}

module.exports.index = index;
module.exports.view = view;
module.exports.update = update;
module.exports.add = add;
module.exports.remove = remove;
