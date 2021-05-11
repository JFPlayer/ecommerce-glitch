const Product = require('../models/Product');

const getProducts = (req, res) => {
  res.json({route: "products"})
}

const getProduct = (req, res) => {
  res.json({route: "product"})
}

const createProduct = async (req, res) => {
  const {
    title,
    brand,
    category,
    subCategory,
    stock,
    price,
    discount,
    description,
    technicalDetails
  } = req.body;
  
  const imgURL = req.imgURL;

  // const details = [{
  //   title: "modelo",
  //   content: "Thinkpad"
  // },{
  //   title: "memoria",
  //   content: "8 GB DDR4"
  // }]

  const product = new Product({
    title,
    brand,
    // category,
    // subCategory,
    stock,
    price,
    discount,
    imgURL,
    description,
    technicalDetails: details
  })

  const productSaved = await product.save()

  res.json(productSaved)

}

const updateProduct = (req, res) => {
  res.json({route: "update product"})
}

const deleteProduct = (req, res) => {
  res.json({route: "update product"})
}


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};