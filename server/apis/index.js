import { Router } from 'express'
import csurf from 'csurf'
import bodyParser from 'body-parser'

import unauthed from './unauthed'
import authed from './authed'
import { guard } from '../jwt'

const router = new Router()

const csrfSetHeader = (req, res, next) => {
  res.header('csrf-token', req.csrfToken())
  next()
}

router.use(csurf({ cookie: true }), csrfSetHeader, bodyParser.json())

router.use('/unauthed', unauthed)
router.use('/authed', guard({}), authed)

router.get('/csrf', (req, res) => {
  res.json({ error: 0 })
})

export default router