const { config } = require('../config')
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: config.awsId,
    secretAccessKey: config.awsSecret,
  }
})

const deleteFilesS3 = async (arrayKey) => {
  
  let toRemove = [];
  let notRemove = [];

  const promisesFound = arrayKey.map(key => {
    const params = {
      Bucket: config.awsBucket,
      Prefix: key,
    }
    return s3.listObjects(params).promise();
  })

  const allObjects = await Promise.all(promisesFound)
  allObjects.forEach(object => {
    if(object.Contents.length === 0) {
      notRemove.push(object.Prefix)
    }else{
      toRemove.push(object.Prefix)
    }
  })
  toRemove.forEach(key => {
    const params = {
      Bucket: config.awsBucket,
      Key: key,
    }
    s3.deleteObject(params, (error, data) => {});
  })
  return {
    filesRemoved: toRemove,
    filesNotRemoved: notRemove,
  }
}

module.exports = deleteFilesS3;