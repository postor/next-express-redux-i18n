import { Router } from 'express'

const router = new Router()

router.get('/test', (req, res) => {
  res.json(req.jwtUser)
})

export default router