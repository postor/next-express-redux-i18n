import { sign, verify } from '../../../server/jwt'



describe('jwt-unit', () => {
  it('sign-verify', async () => {
    const github = 'https://github.com/postor'
    const token = await sign({ github })
    expect(typeof token).toBe('string')
    const decoded = await verify(token)
    expect(decoded.github).toBe(github)
  })
})