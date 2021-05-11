const response = require('../utils/response');
const deleteFileS3 = require('../utils/deleteFileS3');

exports.uploadFile = (req, res) => {
  const URL = req.imgURL;
  const key = req.imgKey;

  const data = {
    URL,
    key,
  }
  response.success(res, 201, data)
}

exports.deleteFileByKey = async (req, res) => {
  if(!req.params.key) return response.error(res, 400);

  const { filesRemoved, filesNotRemoved } = await deleteFileS3([req.params.key]);
  
  if(filesRemoved.length === 0) return response.error(res, 404);

  const data = {
    filesRemoved,
    filesNotRemoved
  }
  
  response.success(res, 200, data)
}

