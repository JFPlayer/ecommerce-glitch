const { Schema, model } = require('mongoose');

const subcategorySchema = new Schema({
  title:{
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('Subcategory', subcategorySchema);