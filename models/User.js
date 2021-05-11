const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firsName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  adress: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  },
  wishList: {
    type: Schema.Types.ObjectId,
    ref: 'WishList',
  },
  role: {
    type: String,
    default: 'user',
  }
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('User', userSchema);