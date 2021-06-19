const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    productId: { type: Schema.Types.ObjectId, ref:'Product' },
    quantity: { type: Number, default: 1 },
  }],
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('Cart', cartSchema);