const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = "I have a dream"
const JWT_SECRET = "This is a secret key of JWT"
class UserController {
  async register(req, res, next) {
    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(SALT_ROUNDS))

    const data = {
      userName: req.body.userName,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
    }
    const user = new User(data)
    user.save().then(user => res.json(user)).catch(next)
  }
  async login(req, res, next) {
    const dataReq = {
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    }
    const phoneNumber = req.body.phoneNumber
    let existingUser = await User.findOne({ phoneNumber }).exec()
    if (existingUser) {
      let isMatch = await bcrypt.compare(dataReq.password, existingUser.password)
      if (!!isMatch) {
        let token = jwt.sign({
          data: existingUser
        }, JWT_SECRET, {
          // expiresIn: '60',
          expiresIn: '10 days'
        })
        res.json(token)
        console.log('token ' + token)
      } else {
        console.log('dklajdlk')
      }
    } else {
      console.log('dklajdlk')
    }
  }
}

module.exports = new UserController