const { Router } = require('express');
const controller = require('../../controller/files.controller');
const { multerUpload, uploadFile } = require('../../middlewares')

const router = Router();

router.route('/')
  .post(multerUpload.single('file'), uploadFile, controller.uploadFile)

router.route('/:key')
  .delete(controller.deleteFileByKey)

module.exports = router;