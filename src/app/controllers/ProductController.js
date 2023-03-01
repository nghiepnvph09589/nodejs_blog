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
  detail(req, res, next) {
    console.log(req.params.id)
    Product.findOne({ _id: req.params.id }).then(product => res.json(product)).catch(next)
  }
  async create(req, res, next) {
    const data = {
      name: req.body.name,
      price: req.body.price,
    }
    const product = new Product(data)
    product.save().then(product => res.json(product)).catch(next)
  }
}

module.exports = new ProductController