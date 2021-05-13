const { Router } = require('express');
const controller = require('../../controller/ads.controller');

const router = Router();

router.route('/banners')
  .get(controller.getBanners)
  .post(controller.createBanner)

router.route('/banners/:bannerId')
  .delete(controller.deleteBannerById)
  
router.route('/marquee')
  .get(controller.getMarquee)
  .post(controller.createMarquee)
  
router.route('/marquee/:marqueeId')
  .delete(controller.deleteMarqueeById)
    
module.exports = router;