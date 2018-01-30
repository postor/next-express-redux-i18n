import { Router } from 'express'
import { sign } from './jwt'

const router = new Router()

router.get('/', (req, res) => {
  res.json({ error: 0 })
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.json({
      username,
      password,
      error: 'username or password not filled',
    })
    return
  }

  if (username != 'user') {
    res.json({
      username,
      password,
      error: 'no such user',
    })
    return
  }

  if (password != '123456') {
    res.json({
      username,
      password,
      error: 'wrong password',
    })
    return
  }

  sign({
    username
  }).then((token) => {
    res.cookie('jwt', token)
    res.json({
      user: { username },
      token
    })
  }).catch((error) => {
    res.json({ error })
  })

})

export default router