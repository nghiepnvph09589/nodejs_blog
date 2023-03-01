const jwt = require('jsonwebtoken');
const JWT_SECRET = "This is a secret key of JWT"
module.exports = function checkToken(req, res, next) {
  console.log('check: ' + req?.headers?.authorization?.split(" ")[1])
  if (req.url.toLowerCase().trim() == '/user/login'.toLowerCase().trim() || req.url.toLowerCase().trim() == '/user/register'.toLowerCase().trim()) {
    next()
    return
  }
  const token = req?.headers?.authorization?.split(" ")[1]
  try {
    const jwtObject = jwt.verify(token, JWT_SECRET)
    const isExpired = Date.now() >= jwtObject.exp * 1000
    if (isExpired) {
      res.status(400).json({ mess: 'Thất bại' })
    } else {
      next()
    }
  } catch (exception) {
    res.status(400).json({ mess: 'Thất bại' })
  }
}
