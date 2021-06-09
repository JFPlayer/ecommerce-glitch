const Banner = require('../models/Banner');
const Marquee = require('../models/Marquee');
const response = require('../utils/response');
const deleteFilesS3 = require('../utils/deleteFilesS3');

exports.createBanner = async (req, res) => {
  const { title, img } = req.body;
  if(!title || !img || !img.URL) return response.error(res, 400);

  const newBanner = new Banner({
    title,
    img,
  })

  try {
    const savedBanner = await newBanner.save();
    response.success(res, 201, savedBanner);
  } catch (error) {
    response.error(res, 503);
  }
}

exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    console.log('entro')
    response.success(res, 200, banners)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.deleteBannerById = (req, res) => {
  if(!req.params.bannerId) return response.error(res, 400);
  try {
    Banner.findByIdAndRemove(req.params.bannerId, async (error, doc) => {
      if(error || !doc) return response.error(res, 400);
      if(doc.img.key) await deleteFilesS3([doc.img.key]);
      const data = {
        banner: doc.title,
        message: 'Banner deleted successfully'
      }
      response.success(res, 200, data);
    })
  } catch (error) {
    response.error(res, 503);
  }
}

exports.createMarquee = async (req, res) => {
  const { title, content } = req.body;
  if(!title || !content) return response.error(res, 400);
  
  const newMarquee = new Marquee({
    title,
    content,
  })
  
  try {
    const savedMarquee = await newMarquee.save();
    response.success(res, 201, savedMarquee);
  } catch (error) {
    response.error(res, 503);
  }
}

exports.getMarquee = async (req, res) => {
  try {
    const marquee = await Marquee.find();
    response.success(res, 200, marquee)
  } catch (error) {
    response.error(res, 503)
  }
}

exports.deleteMarqueeById = (req, res) => {
  if(!req.params.marqueeId) return response.error(res, 400);
  try {
    Marquee.findByIdAndRemove(req.params.marqueeId, (error, doc) => {
      if(error || !doc) return response.error(res, 400);
      const data = {
        marquee: doc.title,
        message: 'Marquee deleted successfully',
      }
      response.success(res, 200, data)
    })
  } catch (error) {
    response.error(res, 503)
  }
}