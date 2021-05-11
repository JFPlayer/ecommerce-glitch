const { Schema, model } = require('mongoose');

const wishListSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('WishList', wishListSchema);