const { Schema, model } = require('mongoose');

const wishListSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  productId : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  // products: [{
  //   productId: { type: Schema.Types.ObjectId, ref:'Product' }
  // }],
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('WishList', wishListSchema);