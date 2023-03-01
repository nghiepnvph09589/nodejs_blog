const express = require('express');
const router = express.Router();
const UploadImage = require('../app/controllers/UpLoadImageController');
router.use('/', UploadImage.single)
module.exports = router