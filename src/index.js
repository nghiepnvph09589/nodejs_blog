const path = require('path')
const express = require('express')
const morgan = require('morgan')
let hbs = require('express-handlebars');
const app = express()
const port = 3000

const route = require('./routes')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(morgan('combined'))

app.engine('hbs', hbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));


route(app);




app.listen(port)