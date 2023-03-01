const express = require('express');
const router = express.Router();
const UploadImage = require('../app/controllers/UpLoadImageController');
router.use('/', UploadImage.array)
module.exports = router