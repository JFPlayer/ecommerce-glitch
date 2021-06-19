const { Router } = require('express');
const controller = require('../../controller/users.controller');
const { verifyToken, checkRole } = require('../../middlewares');

const router = Router();

router.route('/')
  .get(verifyToken, checkRole('admin'), controller.getUsers) // solo el admin
  .put(verifyToken, controller.updateUser) // cualquier usuario por token
  .delete(verifyToken, controller.deleteUser) // cualquier usuario por token

router.route('/:userId')
  .put(verifyToken, checkRole('admin'), controller.changeRoleById) // solo el admin

module.exports = router;