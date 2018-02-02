import { browser } from 'next-express-jwt'

import config from '../jwt-config'

const { parserMethodName, cookieName } = config

export const { wrapper, connect, Provider } = browser(Object.assign({
  serverSiderGetUser,
}, config))

export async function serverSiderGetUser(ctx) {
  const { req, isServer } = ctx
  if (!isServer) {
    return
  }
  const user = await req[parserMethodName]()
  if (!user) {
    return undefined
  }
  return Object.assign({
    token: req.cookies[cookieName],
    generated: 'server',
  }, user)
}           