const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true,
  },
  subCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SubCategory'
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