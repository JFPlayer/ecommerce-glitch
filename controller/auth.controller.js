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
    password
  })

  try {
    const savedUser = await newUser.save();
    console.log(savedUser._id)

    const accessToken = jwt.sign({id: savedUser._id}, config.jwtAccessTokenSecret, { expiresIn: '11m' })
    const refreshToken = jwt.sign({id: savedUser._id}, config.jwtRefreshTokenSecret, { expiresIn: '7d' })

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60*60*24*7*1000 // 7d
    })

    delete savedUser.password;

    response.success(res, 201, { _id: savedUser._id, email: savedUser.email, accessToken })
  } catch (error) {
    response.error(res, 503)
  }

}

exports.signIn = (req, res) => {

}
const a = {
  "$__": {
    "strictMode": true,
    "inserting": true,
    "getters": {},
    "_id": "609a19dc9af35011b279ccc1",
    "wasPopulated": false,
    "activePaths": {
      "paths": {
        "password": "require",
        "email": "require",
        "lastName": "require",
        "firstName": "require"
      },
      "states": {
        "ignore": {},
        "default": {},
        "init": {},
        "modify": {},
        "require": {
          "password": true,
          "email": true,
          "lastName": true,
          "firstName": true
        }
      },
      "stateNames": [
        "require",
        "modify",
        "init",
        "default",
        "ignore"
      ]
    },
    "pathsToScopes": {},
    "cachedRequired": {},
    "session": null,
    "$setCalled": {},
    "emitter": {
      "_events": {},
      "_eventsCount": 0,
      "_maxListeners": 0
    },
    "$options": {
      "defaults": true
    },
    "validating": null,
    "backup": {
      "activePaths": {
        "modify": {
          "firstName": true,
          "lastName": true,
          "email": true,
          "createdAt": true,
          "updatedAt": true,
          "password": true
        },
        "default": {
          "role": true,
          "_id": true
        }
      }
    },
    "savedState": {}
  },
  "isNew": false,
  "$locals": {},
  "$op": null,
  "_doc": {
    "role": "user",
    "_id": "609a19dc9af35011b279ccc1",
    "firstName": "Joel",
    "lastName": "Flores",
    "email": "joelf.-@live.com",
    "password": "$2b$10$HUYahxiw9zCTCWz7pEoxj.2ISqYxlWA/jFQ2zmYNZ2FpDCVttGuLC",
    "createdAt": "2021-05-11T05:45:00.630Z",
    "updatedAt": "2021-05-11T05:45:00.630Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWExOWRjOWFmMzUwMTFiMjc5Y2NjMSIsImlhdCI6MTYyMDcxMTkwMCwiZXhwIjoxNjIwNzEyNTYwfQ.hsXT2qflHi_N_yBfC_uLt5hfSeor-BMDZIwXFc7IYAM"
}