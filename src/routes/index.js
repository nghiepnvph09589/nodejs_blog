const productRouter = require('./product')
const bannerRouter = require('./banner')
const arrayImage = require('./arrayImage')
const singleImage = require('./singleImage')
const userRouter = require('./user')
function route(app) {
  app.use('/product', productRouter)
  app.get('/banner', bannerRouter)
  app.post('/uploadArrayImage', arrayImage)
  app.post('/uploadSingleImage', singleImage)
  app.use('/user', userRouter)
}

module.exports = route