require('dotenv').config();

const config = {
  port: process.env.PORT,
  mongodbUri: process.env.MONGODB_URI,
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  awsBucket: process.env.AWS_BUCKET,
}

module.exports = { config }