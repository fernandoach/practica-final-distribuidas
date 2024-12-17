import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) {
    return res.redirect('/auth/login')
  }

  try {
    const verified = jwt.verify(token, 'secret')
    req.user = verified
    next()
  } catch (error) {
    return res.json(error)
  }
}

export { authMiddleware }
