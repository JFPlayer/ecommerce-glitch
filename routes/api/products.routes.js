const { Router } = require('express');
const controller = require('../../controller/products.controller')

const router = Router();

router.route('/')
  .get(controller.getProducts)
  .post(controller.createProduct)

router.route('/:id')
  .get(controller.getProduct)
  .put(controller.updateProduct)
  .delete(controller.deleteProduct)

module.exports = router