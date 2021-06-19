const { Router } = require('express');
const controller = require('../../controller/categories.controller')
const { verifyToken, checkRole } = require('../../middlewares')

const router = Router();

router.route('/')
  .get(controller.getCategories)
  .post(verifyToken, checkRole('admin'), controller.createCategory)

router.route('/:categoryId')
  .get(controller.getCategoryById)
  .put(verifyToken, checkRole('admin'), controller.updateCategoryById)
  .delete(verifyToken, checkRole('admin'), controller.deleteCategoryById)

module.exports = router;