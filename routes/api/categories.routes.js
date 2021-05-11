const { Router } = require('express');
const controller = require('../../controller/categories.controller')

const router = Router();

router.route('/')
  .get(controller.getCategories)
  .post(controller.createCategory)

router.route('/:categoryId')
  .get(controller.getCategoryById)
  .put(controller.updateCategoryById)
  .delete(controller.deleteCategoryById)

module.exports = router;