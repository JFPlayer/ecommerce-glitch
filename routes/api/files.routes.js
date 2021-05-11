const { Router } = require('express');
const controller = require('../../controller/files.controller');
const { multerUpload, s3 } = require('../../middlewares')

const router = Router();

router.route('/')
  .post(multerUpload.single('file'), s3.uploadFile, controller.uploadFile)

router.route('/:key')
  .delete(controller.deleteFileByKey)

module.exports = router;