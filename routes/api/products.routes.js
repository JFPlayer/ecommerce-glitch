const { Router } = require('express');
const controller = require('../../controller/products.controller')
const { verifyToken, checkRole } = require('../../middlewares')

const router = Router();

router.route('/')
  .get(controller.getProducts)
  .post(verifyToken, checkRole('admin'), controller.createProduct)

router.route('/:productId')
  .get(controller.getProductById)
  .put( controller.updateProductById)
  .delete(verifyToken, checkRole('admin'), controller.deleteProductById)

module.exports = router