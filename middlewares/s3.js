const { config } = require('../config');
const { nanoid } = require('nanoid')
const AWS = require('aws-sdk');
const response = require('../utils/response');

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: config.awsId,
    secretAccessKey: config.awsSecret,
  }
})

exports.uploadFile = (req, res, next) => {
  if(!req.file) return response.error(res, 400)

  const file = req.file.originalname.split('.');
  const fileExt = file[file.length - 1];

  if(req.file.size > 1024*1024 || !['jpg','jpeg','png'].some(ext => ext === fileExt)) return response.error(res, 400)
  
  const params = {
    Bucket: config.awsBucket,
    Key: `${nanoid()}.${fileExt}`,
    Body: req.file.buffer,
    // ACL: "public-read",
  }
  s3.upload(params, (error, data) => {
    if(error) return response.error(res, 503)

    req.imgURL = `https://dnvvz2e7ybok6.cloudfront.net/${data.Key}`;
    req.imgKey = data.Key;
    next()
  })
}