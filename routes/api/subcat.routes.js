const { Router } = require('express');
const controller = require('../../controller/subcategories.controller')
const { verifyToken, checkRole } = require('../../middlewares')

const router = Router();

router.route('/')
  .get(controller.getSubcategories)
  .post(controller.createSubcategory)

router.route('/:subcategoryId')
  .get(controller.getSubcategoryById)
  .put(controller.updateSubcategoryById)
  .delete(controller.deleteSubcategoryById)

module.exports = router;