const { Router } = require('express');
const controller = require('../../controller/subcategories.controller')
const { verifyToken, checkRole } = require('../../middlewares')

const router = Router();

// router.route('/')
//   .get(controller.getSubcategories)
//   .post(verifyToken, checkRole('admin'), controller.createSubcategory)

// router.route('/:subcategoryId')
//   .get(controller.getSubcategoryById)
//   .put(verifyToken, checkRole('admin'), controller.updateSubcategoryById)
//   .delete(verifyToken, checkRole('admin'), controller.deleteSubcategoryById)

module.exports = router;