const { Schema, model } = require('mongoose');

const subcategorySchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('Subcategory', subcategorySchema);