const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true,
  },
  subcategories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Subcategory'
    }
  ],
  img: {
    URL: String,
    key: String,
  }
},{
  timestamps: true,
  versionKey: false,
})

module.exports = model('Category', categorySchema);