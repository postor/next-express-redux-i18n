import jwt from 'jsonwebtoken'

const secret = 'my test secret'
const maxAge = '7d'

export const sign = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, secret, {
    expiresIn: maxAge,
  }, (err, token) => {
    if (err) {
      reject(err)
      return
    }
    resolve(token)
  })
})

export const verify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, secret, {
    maxAge,
  }, (err, decoded) => {
    if (err) {
      reject(err)
      return
    }
    resolve(decoded)
  })
})

/**
 * use this on server level
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const parseJwtCookie = (req, res, next) => {
  req.getUser = async () => {
    if (req.user) {
      return req.user
    }
    const token = req.cookies['jwt']
    if (!token) {
      return
    }
    const user = await verify(token)
    req.user = Object.assign({ token, }, user)
    return user
  }
  next()
}