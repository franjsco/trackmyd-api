const mongoose = require('mongoose');

const device = {
  name: {
    type: String,
    required: true,
  },
  lastUpdate: {
    type: String,
    required: false,
  },
  position: {
    latitude: {
      type: String,
      required: false,
    },
    longtitude: {
      type: String,
      required: false,
    },
    altitude: {
      type: String,
      required: false,
    },
    speed: {
      type: String,
      required: false,
    },
    accurancy: {
      type: String,
      required: false,
    },
  },
  information: {
    battery: {
      type: String,
      required: false,
    },
  },
};

const deviceSchema = mongoose.Schema(device, {
  collection: 'devices',
  versionKey: false,
});

const Device = mongoose.model('device', deviceSchema);

module.exports = Device;

module.exports.get = (callback, limit) => {
  Device.find(callback).limit(limit);
};
