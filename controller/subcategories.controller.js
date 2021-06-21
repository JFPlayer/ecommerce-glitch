const Subcategory = require('../models/Subcategory');
const Category = require('../models/Category');
const response = require('../utils/response');


exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    response.success(res, 200, subcategories)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.getSubcategoryById = async (req, res) => {
  if(!req.params.subcategoryId) return response.error(res, 400)
  try {
    const subcategory = await Subcategory.findById(req.params.subcategoryId);
    if(!subcategory) return response.error(res, 404)
    response.success(res, 200, subcategory)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.createSubcategory = async (req, res) => {
  const { title, categoryId } = req.body;

  if(!title || !categoryId) return response.error(res, 400)

  const categoryFound = await Category.findById(categoryId)

  if (!categoryFound) return response.error(res, 404)
  
  const newSubcategory = new Subcategory({
    title,
    category: categoryFound._id
  })
  
  try {
    const savedSubcategory = await newSubcategory.save();
    
    const dataToUpdateCategory = {
      subcategories: [...categoryFound.subcategories, savedSubcategory._id]
    }

    const cat = await Category.findByIdAndUpdate(categoryId, dataToUpdateCategory)

    response.success(res, 201, savedSubcategory)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.updateSubcategoryById = (req, res) => {
  if(!req.params.subcategoryId || !req.body) return response.error(res, 400)

  try {
    Subcategory.findByIdAndUpdate(req.params.subcategoryId, req.body, {
      new: true
    }, (error, doc) => {
      if(error || !doc) return response.error(res, 400)
      response.success(res, 200, doc)
    })
  } catch (error) {
    response.error(res, 503)
  }
}

exports.deleteSubcategoryById = async (req, res) => {
  if(!req.params.subcategoryId) return response.error(res, 400)

  try {

    const subcategoryDeleted = await Subcategory.findByIdAndDelete(req.params.subcategoryId).populate('category')

    const dataToUpdateCategory = {
      subcategories: subcategoryDeleted.category.subcategories.filter((subcategoryId) => subcategoryId !== subcategoryDeleted._id)
    }

    const cat = await Category.findByIdAndUpdate(subcategoryDeleted.category._id, dataToUpdateCategory)

    const data = {
      subcategory: subcategoryDeleted.title,
      message: 'Subcategory deleted successfully'
    }
    
    response.success(res, 200, data)
  } catch (error) {
    response.error(res, 503)
  }
}