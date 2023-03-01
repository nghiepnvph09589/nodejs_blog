const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController')

router.post('/register', UserController.register)
router.put('/login', UserController.login)
module.exports = router