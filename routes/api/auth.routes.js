const { Router } = require('express');
const controller = require('../../controller/auth.controller');
const { verifyToken, checkEmailDuplicate } = require('../../middlewares')

const router = Router();

router.route('/signup')
  .post(checkEmailDuplicate, controller.signUp)

router.route('/signin')
  .post(controller.signIn)

router.route('/signout')
  .get(controller.signOut)

router.route('/refreshtoken')
  .get(controller.refreshToken)

router.route('/whoami')
  .get(verifyToken, controller.whoAmI)

module.exports = router;