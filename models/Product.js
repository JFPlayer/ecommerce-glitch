const { Schema, model } = require('mongoose');
const generateSKU = require('../utils/generateSKU');

const productSchema = new Schema({
  sku: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  rating: [{ //
    type: Number,
    min: 0,
    max:5,
    default:0
  }],
  img: [{
    URL: String,
    key: String,
  }],
  description: {
    type: String,
  },
  technicalDetails: [{
    title: String,
    content: String,
  }],
}, {
  timestamps: true,
  versionKey: false,
})

productSchema.pre('save', async function(next) {
  if(!this.sku) this.sku = generateSKU()
  next()
})

module.exports = model('Product', productSchema )