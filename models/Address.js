const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  ZIPCode: {
    type: String,
    required: true,
  },
  geolocation: {
    lat: Number,
    long: Number,
  },
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('Address', addressSchema);