const { Schema, model } = require('mongoose');

const bannerSchema = new Schema({
  URL: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = model('Banner', bannerSchema);