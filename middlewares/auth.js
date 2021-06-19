const { config } = require('../config');
const jwt = require('jsonwebtoken');
const response = require('../utils/response');
const User = require('../models/User');

exports.verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    if(!bearerHeader) return response.error(res, 401);

    const token = bearerHeader.split(' ')[1];

    
    jwt.verify(token, config.jwtAccessTokenSecret, (error, user) => {
      if(error) return response.error(res, 401);
      req.userId = user.id;
      next();
  })
  } catch (error) {
    response.error(res, 500)
  }
}

exports.checkRole = (role) =>  async (req, res, next) => {
  try {
    const userFound = await User.findById(req.userId, { password: 0 });
    if(!userFound) return response.error(res, 400);
  
    if(userFound.role !== role) return response.error(res, 403, `Require ${role} role`);
    next();
  } catch (error) {
    response.error(res, 503)
  }
}

exports.checkEmailDuplicate = async (req, res, next) => {
  const { email } = req.body;
  if(!email) return response.error(res, 400);
  const userFound = await User.findOne({ email: email }, { password : 0 } )
  if(userFound) return response.error(res, 400, 'User already exists');
  next();
}