const { uploadFile } = require('./s3');
const { upload } = require('./upload');
const { verifyToken, checkRole, checkEmailDuplicate } = require('./auth')

module.exports = {
  uploadFile,
  multerUpload: upload,
  verifyToken,
  checkRole,
  checkEmailDuplicate,
}