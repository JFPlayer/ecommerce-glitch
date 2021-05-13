const { Schema, model } = require('mongoose');

const bannerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    URL: String,
    key: String,
  }
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = model('Banner', bannerSchema);