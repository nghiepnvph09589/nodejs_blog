const Banner = require('../models/Banner')

class BannerController {
  index(req, res) {
    Banner.find({}, function (err, banner) {
      if (!err) {
        res.json(banner);
      } else {
        res.status(401).json()
      }
    })
  }
}

module.exports = new BannerController