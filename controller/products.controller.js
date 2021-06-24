const Product = require('../models/Product');
const response = require('../utils/response');
const deleteFilesS3 = require('../utils/deleteFilesS3');

exports.getProducts = async (req, res) => {
  const { limit, page, sort, populate, paginate, select, exposurePer, salesQuantity, discount,  ...queries } = req.query
  
  const query = {}

  for(const key in queries) {
    if(queries[key]) {
      query[key] = Array.isArray(queries[key]) ? new RegExp(queries[key].filter(value => value).join('|'), 'i') : queries[key]
    }
  }

  const options = {}

  if(sort) options['sort'] = { price : sort }

  if(populate) options['populate'] = { path: 'category subcategory', select: 'title' }

  options['pagination'] = paginate ? true : false

  if(limit) options['limit'] = limit

  if(page) options['page'] = page

  if(select) options['select'] = select

  if(exposurePer) options['sort'] = { exposurePer }

  if(salesQuantity) options['sort'] = { salesQuantity }

  if(discount) options['sort'] = { discount }


  
  try{
    const products = await Product.paginate(query, options);
    response.success(res, 200, products)
  } catch(error) {
    response.error(res, 503)
  }
}

exports.getProductById = async (req, res) => {
  if(!req.params.productId) return response.error(res, 400);
  try {
    const product = await Product.findById(req.params.productId).populate({ path: 'category subcategory', select: 'title' });
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
    price,//
    discount,
    images,
    description,
    specs,
    exposurePer,
  } = req.body;

  if(![title, brand, category, subcategory, stock, price].every(field => field)) return response.error(res, 400);

  const newProduct = new Product({
    sku,
    title,
    brand,
    category,
    subcategory,
    stock,
    price,
    discount,
    images,
    description,
    specs,
    exposurePer,
  })
  
  try {
    const savedProduct = await newProduct.save();
    response.success(res, 201, savedProduct)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.updateProductById = async (req, res) => {
  if(!req.params.productId || !req.body) return response.error(res, 400);
  
  const { images } = req.body

  try {
    //eliminar las imagenes que no se incluyen en la actualizacion
    if(images && images.length) {
      const productFound = await Product.findById(req.params.productId)
      
      if(!productFound) return response.error(res, 404)

      const keysDeprecatedImages = productFound.images.reduce((acc, { key }) => {
        if(!images.some(imageFromClient => imageFromClient.key === key)) return [...acc, key]
        return acc
      },[])
      if(keysDeprecatedImages.length) await deleteFilesS3(keysDeprecatedImages)
    }

    Product.findByIdAndUpdate(req.params.productId, req.body, { new: true }, (error, doc) => {
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
      if(doc.images && doc.images.length > 0) {
        const keys = doc.images.map(image => image.key)
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