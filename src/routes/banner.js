const express = require('express');
const router = express.Router();
const bannerController = require('../app/controllers/BannerController')

router.use('/', bannerController.index)
module.exports = router