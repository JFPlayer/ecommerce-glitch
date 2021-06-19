const { Router } = require('express');
const controller = require('../../controller/files.controller');
const { multerUpload, uploadFile } = require('../../middlewares');
const { verifyToken, checkRole } = require('../../middlewares')

const router = Router();

router.route('/')
  .post(verifyToken, checkRole('admin'), multerUpload.single('file'), uploadFile, controller.uploadFile)

router.route('/:key')
  .delete(verifyToken, checkRole('admin'), controller.deleteFileByKey)

module.exports = router;