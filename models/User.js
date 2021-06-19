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
  DNI: {
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
  phone: {
    type: String
  },
  address: {
    city: String,
    province: String,
    street: String,
    num: String,
    dpto: String,
    zipCode: String,
    geolocation: {
      lat: Number,
      long: Number,
    }
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

// userSchema.pre('save', async function(next){
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// })

userSchema.statics.encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10)
};

userSchema.methods.isValidPassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema);