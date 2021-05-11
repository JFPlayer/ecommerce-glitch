const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  status: {
    type: String,
    default:'pending'
  }
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('Cart', cartSchema);