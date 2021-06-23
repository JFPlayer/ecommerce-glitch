const User = require('../models/User');
const Cart = require('../models/Cart');
const WishList = require('../models/WishList');
const response = require('../utils/response');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    response.success(res, 200, users);
  } catch (error) {
    response.error(res, 503);
  }
}

exports.updateUser = async (req, res) => {
  
  if(!req.body) return response.error(res, 400);
  
  if(req.body.password) {
    req.body.password = await User.encryptPassword(req.body.password)
  }

  if(req.body.cart) {
    req.body.cart = req.body.cart.filter(product => product.quantity) // filtramos los que tengan 0 cantidad o null, undefined, etc
    const cartFound = await Cart.findOne({ userId: req.userId });

    if(!cartFound) {// si el usuario NO tiene un cart
      const newCart = new Cart({
        userId: req.userId,
        products: req.body.cart,
      })
      
      const savedCart = await newCart.save();
      req.body.cart = savedCart._id

    }else { // si el usuario SI tiene un cart
      // actualizamos el cart
      const updatedCart = await Cart.findOneAndUpdate({ userId: req.userId }, { products: req.body.cart })
      req.body.cart = updatedCart._id;
    }
  }

  if(req.body.wishList ) {
    req.body.wishList = [...new Set(req.body.wishList)]
    const wishListFound = await WishList.findOne({ userId: req.userId });

    if(!wishListFound) {
      const newWishList = new WishList({
        userId: req.userId,
        productId: req.body.wishList
      })
      const savedWishList = await newWishList.save();
      req.body.wishList = savedWishList._id
      
    }else {
      const updatedWishList = await WishList.findOneAndUpdate({ userId: req.userId }, { productId: req.body.wishList })
      req.body.wishList = updatedWishList._id;
    }
  }

  try {
    const userUpdated = await User.findByIdAndUpdate(req.userId, req.body, { new: true })
      .select('-password')
      .populate({ path: 'cart wishList', populate: { path: 'products.productId productId' } })
    response.success(res, 201, userUpdated)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.deleteUser = (req, res) => {
  try {
    User.findByIdAndRemove(req.userId, (error, user) => {
      if(error || !user) return response.error(res, 400)
      const data = {
        user: user.email,
        message: 'User deleted successfully'
      }
      response.success(res, 200, data)
    })
  } catch (error) {
    response.error(res, 503)
  }
}

exports.changeRoleById = async (req, res) => {
  if(!req.params.userId || !req.body.role) return response.error(res, 400);
  
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true }).select('-password')
    if(!updatedUser) return response.error(res, 400);
    response.success(res, 200, updatedUser)
  } catch (error) {
    response.error(res, 503);
  }
}