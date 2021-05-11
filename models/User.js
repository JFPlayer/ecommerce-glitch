const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  firstName: {
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

userSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

userSchema.methods.isValidPassword = async function(password){
  return bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema);