const { Router } = require('express');
const controller = require('../../controller/auth.controller');

const router = Router();

router.route('/signup')
  .post(controller.signUp)

router.route('/signin')
  .post(controller.signIn)

module.exports = router;