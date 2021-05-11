require('dotenv').config();

const config = {
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  awsBucket: process.env.AWS_BUCKET,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
}

module.exports = { config }