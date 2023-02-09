const newsRouter = require('./news')

function route(app) {
  app.use('/news', newsRouter)

  app.get('/', (req, res) => {
    res.render('home')
  })
  // app.get('/news', (req, res) => {
  //   res.render('news')
  // })

  app.get('/search', (req, res) => {
    console.log(req.query.q)
    res.render('search')
  })
}

module.exports = route