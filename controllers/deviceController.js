const Device = require('../models/deviceModel');
const logger = require('../logger');

function index(req, res) {
  if (req.query.name) {
    Device.findOne({ name: req.query.name }, (err, device) => {
      if (!device) {
        logger.logError(`index: ${err}`);
        return res.status(404).send();
      }
      return res.json(device);
    });
  } else {
    Device.find({}, (err, devices) => {
      if (err) {
        logger.logError(`index: ${err}`);
        return res.status(500).send();
      }

      if (devices.length === 0) {
        return res.status(404).send();
      }
      return res.json(devices);
    });
  }
}

function view(req, res) {
  Device.findById(req.params.deviceId)
    .then(device => res.json(device))
    .catch((err) => {
      logger.logError(`view: ${err}`);
      return res.status(500).send();
    });
}

function update(req, res) {
  Device.findOneAndUpdate({ _id: req.params.deviceId }, req.body, (err) => {
    if (err) {
      logger.logError(`update: ${err}`);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
}

function add(req, res) {
  const device = new Device(req.body);
  device
    .save()
    .then(item => res.status(201).json(item))
    .catch((err) => {
      logger.logError(`add: ${err}`);
      return res.status(500).send();
    });
}

function remove(req, res) {
  Device.deleteOne({ _id: req.params.deviceId }, (err) => {
    if (err) {
      logger.logError(`delete: ${err}`);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
}

module.exports.index = index;
module.exports.view = view;
module.exports.update = update;
module.exports.add = add;
module.exports.remove = remove;
