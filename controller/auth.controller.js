const { config } = require('../config');
const User = require('../models/User');
const response =require('../utils/response');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const { 
    firstName,
    lastName,
    email,
    password
  } = req.body;

  if(![firstName ,lastName, email, password].every(field => field)) return response.error(req, 400);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: await User.encryptPassword(password)
  })
  try {
    const savedUser = await newUser.save();

    const accessToken = jwt.sign({id: savedUser._id}, config.jwtAccessTokenSecret, { expiresIn: '11m' })
    const refreshToken = jwt.sign({id: savedUser._id}, config.jwtRefreshTokenSecret, { expiresIn: '7d' })

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      maxAge: 60*60*24*7*1000 // 7d
    })

    const { password: userPassword, ...data } = savedUser._doc


    response.success(res, 201, { ...data, accessToken})
  } catch (error) {
    response.error(res, 503)
  }
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)
  
  if(!email || !password) return response.error(res, 400)
  
  try {
    const user = await User.findOne({ email })
      .populate({ path: 'cart wishList', populate: { path: 'products.productId productId' } })
    
    if(!user) return response.error(res, 400, 'Email or password incorrect')
    
    const isMatch = await user.isValidPassword(password);
    
    console.log('isMatch')
    console.log(isMatch)
    
    if(!isMatch) return response.error(res, 400, 'Email or password incorrect')
    
    const accessToken = jwt.sign({id: user._id}, config.jwtAccessTokenSecret, { expiresIn: '11m' })
    const refreshToken = jwt.sign({id: user._id}, config.jwtRefreshTokenSecret, { expiresIn: '7d' })

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      maxAge: 60*60*24*7*1000 // 7d
    })

    const { password : userPassword, ...data } = user._doc
    
    response.success(res, 201, { ...data, accessToken})
  } catch (error) {
    response.error(res, 503)
  }
}

exports.signOut = (req, res) => {
  try {
    res.clearCookie('refreshToken', {
      path: '/'
    })
    response.success(res, 200)
  } catch (error) {
    response.error(res)
  }
}

exports.refreshToken = (req, res) => {
  try {
    const rfToken = req.cookies.refreshToken;
    if(!rfToken) return response.error(res, 400);

    jwt.verify(rfToken, config.jwtRefreshTokenSecret, (error, user) => {
      if(error) return response.error(res, 400);

      const accessToken = jwt.sign({id: user.id}, config.jwtAccessTokenSecret, { expiresIn: '11m' })
      
      response.success(res, 200, { accessToken })
    })
  } catch (error) {
    response.error(res, 500)
  }
}

exports.whoAmI = (req, res) => {
  const rfToken = req.cookies.refreshToken;
  
  if(!rfToken) return response.error(res, 400);
  
  try {
    jwt.verify(rfToken, config.jwtRefreshTokenSecret, async (error, user) => {
      if(error) return response.error(res, 400);
      
      const userFound = await User.findById(user.id)
        .select('-password')
        .populate({ path: 'cart wishList', populate: { path: 'products.productId productId' } })
      if(!userFound) return response.error(res, 404);

      const accessToken = jwt.sign({id: user.id}, config.jwtAccessTokenSecret, { expiresIn: '11m' })
      response.success(res, 200, { ...userFound._doc, accessToken})
    })
  } catch (error) {
    response.error(res, 500)
  }
}