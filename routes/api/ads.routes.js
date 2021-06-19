const { Router } = require('express');
const controller = require('../../controller/ads.controller');
const { verifyToken, checkRole } = require('../../middlewares')

const router = Router();

router.route('/banners')
  .get(controller.getBanners)
  .post(verifyToken, checkRole('admin'), controller.createBanner)

router.route('/banners/:bannerId')
  .delete(verifyToken, checkRole('admin'), controller.deleteBannerById)
  
router.route('/marquee')
  .get(controller.getMarquee)
  .post(verifyToken, checkRole('admin'), controller.createMarquee)
  
router.route('/marquee/:marqueeId')
  .delete(verifyToken, checkRole('admin'), controller.deleteMarqueeById)
    
module.exports = router;