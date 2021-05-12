const Product = require('../models/Product');
const generateSKU = require('../utils/generateSKU');
const response = require('../utils/response');
const deleteFilesS3 = require('../utils/deleteFilesS3');

exports.getProducts = async (req, res) => {
  try{
    const products = await Product.find();
    response.success(res, 200, products)
  } catch(error) {
    response.error(res, 503)
  }
}

exports.getProductById = async (req, res) => {
  if(!req.params.productId) return response.error(res, 400);
  try {
    const product = await Product.findById(req.params.productId);
    if(!product) return response.error(res, 404)
    response.success(res, 200, product)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.createProduct = async (req, res) => {
  const {
    sku,
    title,//
    brand,//
    category,//
    subcategory,//
    stock,//
    price,////
    discount,
    img,
    description,
    technicalDetails
  } = req.body;

  if(![title, brand, category, subcategory, stock, price].every(field => field)) return response.error(res, 400);

  const newProduct = new Product({
    sku: sku || generateSKU(),
    title,
    brand,
    category,
    subcategory,
    stock,
    price,
    discount,
    img,
    description,
    technicalDetails
  })
  try {
    const savedProduct = await newProduct.save();
    response.success(res, 201, savedProduct)
  } catch (error) {
    console.log(error)
    response.error(res, 503)
  }
}

exports.updateProductById = (req, res) => {
  if(!req.params.productId || !req.body) return response.error(res, 400);
  try {
    Product.findByIdAndUpdate(req.params.productId, req.body, {
      new: true
    }, (error, doc) => {
      if(error || !doc) return response.error(res, 400);
      response.success(res, 200, doc);
    })
  } catch (error) {
    response.error(res, 503)
  }
}

exports.deleteProductById = (req, res) => {
  if(!req.params.productId) return response.error(res, 400);
  try {
    Product.findByIdAndRemove(req.params.productId, async (error, doc) => {
      if(error || !doc) return response.error(res, 400);
      if(doc.img && doc.img.length > 0) {
        const keys = doc.img.map(img => img.key)
        await deleteFilesS3(keys)
      }
      const data = {
        product: doc._id,
        message: 'Product deleted successfully'
      }
      response.success(res, 200, data)
    })
  } catch (error) {
    response.error(res, 503)
  }
}