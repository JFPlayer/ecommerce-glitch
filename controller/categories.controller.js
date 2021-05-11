const Category = require('../models/Category');
const Subcategory = require('../models/Subcategory');
const response = require('../utils/response');
const deleteFilesS3 = require('../utils/deleteFilesS3');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    response.success(res, 200, categories)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.getCategoryById = async (req, res) => {
  if(!req.params.categoryId) return response.error(res, 400);
  try {
    const category = await Category.findById(req.params.categoryId);
    if(!category) return response.error(res, 404)
    response.success(res, 200, category)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.createCategory = async (req, res) => {
  const { title, subCategories, img } = req.body;

  if(!title) return response.error(res, 400)

  let subCategoriesFound = [];
  if(subCategories && subCategories.length > 0){
    subCategoriesFound = await Subcategory.find({title: { $in: subCategories }})
  }
  const newCategory = new Category({
    title,
    subCategories: subCategoriesFound.map(subcategory => subcategory._id),
    img,
  })

  try {
    const savedCategory = await newCategory.save();
    response.success(res, 201, savedCategory)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.updateCategoryById = (req, res) => {
  if(!req.params.categoryId || !req.body) return response.error(res, 400)

  try {
    Category.findByIdAndUpdate(req.params.categoryId, req.body, {
      new: true
    }, (error, doc) => {
      if(error || !doc) return response.error(res, 400)
      response.success(res, 200, doc)
    })
  } catch (error) {
    response.error(res, 503)
  }
}

exports.deleteCategoryById = (req, res) => {
  if(!req.params.categoryId) return response.error(res, 400)
  
  try {
    Category.findByIdAndRemove(req.params.categoryId, async(error, doc) => {
      if(error || !doc) return response.error(res, 400)
      if(doc.img.key) await deleteFilesS3([doc.img.key])
      const data = {
        category: doc.title,
        message: 'Category deleted successfully'
      }
      response.success(res, 200, data)
    })
  } catch (error) {
    response.error(res, 503)
  }
}