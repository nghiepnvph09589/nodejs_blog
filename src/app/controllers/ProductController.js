const Product = require('../models/Product')

class ProductController {
  index(req, res) {
    Product.find({}, function (err, product) {
      console.log(product)
      if (!err) {
        res.json(product);
      } else {
        res.status(400).json()
      }
    })
  }
}

module.exports = new ProductController