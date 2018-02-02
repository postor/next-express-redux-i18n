import config from '../jwt-config'
import { server } from 'next-express-jwt'

const secret = 'my test secret'
const maxAge = '7d'
export const maxAgeMiliSeconds = 7 * 24 * 60 * 60 * 1000

const signOption = {
  expiresIn: maxAge,
}

const verifyOption = {
  maxAge,
}

export const { sign, verify, parser, guard } = server({
  ...config,
  secret,
  signOption,
  verifyOption,
})