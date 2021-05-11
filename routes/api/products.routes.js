const { Router } = require('express');
const controller = require('../../controller/products.controller')

const router = Router();

router.route('/')
  .get(controller.getProducts)
  .post(controller.createProduct)

router.route('/:productId')
  .get(controller.getProductById)
  .put(controller.updateProductById)
  .delete(controller.deleteProductById)

module.exports = router