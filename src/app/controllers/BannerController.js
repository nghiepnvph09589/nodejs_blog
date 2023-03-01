const Banner = require('../models/Banner')

class BannerController {
  index(req, res, next) {
    // Banner.find({}, function (err, banner) {
    //   if (!err) {
    //     res.json(banner);
    //   } else {
    //     res.status(400).json()
    //   }
    // })
    Banner.find({}).then(banner => res.json(banner)).catch(next)
  }
}

module.exports = new BannerController