import 'babel-polyfill'
import express from 'express'
import next from 'next'
import cookieParser from 'cookie-parser'
import { parser } from './jwt'

import routes from './routes'
import apis from './apis'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use('/', express.static('static'))
  server.use(cookieParser(), parser({ parserCacheName: 'jwtUser' }))
  server.use('/apis', apis)
  server.use(handler)
  server.listen(port, (err) => {
    if (err) throw err
    process.send && process.send('http ready')
    console.log(`> Ready on http://localhost:${port}`)
  })
})