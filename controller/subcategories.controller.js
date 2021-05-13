const Product = require('../models/Product');
const Subcategory = require('../models/Subcategory');
const response = require('../utils/response');


exports.getSubcategories = async (req, res) => {
  try {
    const subCategories = await Subcategory.find();
    response.success(res, 200, subCategories)
  } catch (error) {
    response.error(res, 503)
  }
}
exports.getSubcategoryById = async (req, res) => {
  if(!req.params.subcategoryId) return response.error(res, 400)
  try {
    const subcategory = await Subcategory.findById(req.params.subcategoryId);
    if(!subcategory) return response.error(res, 404)
    response.success(res, 200, subcategory)
  } catch (error) {
    response.error(res, 503)
  }
}
exports.createSubcategory = async (req, res) => {
  const { title, products } = req.body;

  if(!title) return response.error(res, 400)

  let productsFound = [];
  if(products && products.length > 0){
    productsFound = await Product.find({_id: { $in: products }})
  }

  const newSubcategory = new Subcategory({
    title,
    products: productsFound.map(product => product._id),
  })

  try {
    const savedSubcategory = await newSubcategory.save();
    response.success(res, 201, savedSubcategory)
  } catch (error) {
    response.error(res, 503)
  }
  
}
exports.updateSubcategoryById = (req, res) => {
  if(!req.params.subcategoryId || !req.body) return response.error(res, 400)

  try {
    Subcategory.findByIdAndUpdate(req.params.subcategoryId, req.body, {
      new: true
    }, (error, doc) => {
      if(error || !doc) return response.error(res, 400)
      response.success(res, 200, doc)
    })
  } catch (error) {
    response.error(res, 503)
  }
}
exports.deleteSubcategoryById = (req, res) => {
  if(!req.params.subcategoryId) return response.error(res, 400)
  
  try {
    Subcategory.findByIdAndRemove(req.params.subcategoryId, (error, doc) => {
      if(error || !doc) return response.error(res, 400)
      const data = {
        subcategory: doc.title,
        message: 'Subcategory deleted successfully'
      }
      response.success(res, 200, data)
    })
  } catch (error) {
    response.error(res, 503)
  }
}