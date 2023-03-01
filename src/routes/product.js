const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController')
router.post('/create', productController.create)
router.get('/productDetail/:id', productController.detail)
router.get('/', productController.index)
module.exports = router