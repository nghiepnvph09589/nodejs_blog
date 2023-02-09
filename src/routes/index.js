const productRouter = require('./product')
const bannerRouter = require('./banner')
function route(app) {
  app.get('/product', productRouter)
  app.get('/banner', bannerRouter)
}

module.exports = route