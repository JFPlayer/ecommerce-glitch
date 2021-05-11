const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');

const productSchema = new Schema({
  sku: {
    type: String,
    unique: true,
    default: nanoid(8).toUpperCase()
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
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
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
    required: true,
    default: 0
  },
  rating: [{
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
    required: true
  },
  technicalDetails: [{
    title: String,
    content: String,
  }],
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = model('Product', productSchema )