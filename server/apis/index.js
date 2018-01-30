import { Router } from 'express'
import csurf from 'csurf'
import bodyParser from 'body-parser'

import unauthed from './unauthed'
import authed from './authed'

const router = new Router()

const csrfSetHeader = (req, res, next) => {
  res.header('csrf-token', req.csrfToken())
  next()
}

const parseUser = (req, res, next) => {
  req.getUser()
    .then((user) => {
      if (!user) {
        return Promise.reject('login first')
      }
      next()
    })
    .catch((error) => res.json({ error }))
}

router.use(csurf({ cookie: true }), csrfSetHeader, bodyParser.json())

router.use('/unauthed', unauthed)
router.use('/authed', parseUser, authed)

router.get('/csrf', (req, res) => {
  res.json({ error: 0 })
})

export default router