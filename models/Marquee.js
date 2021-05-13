const { Schema, model } = require('mongoose');

const marqueeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = model('Marquee', marqueeSchema);