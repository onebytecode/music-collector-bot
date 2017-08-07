// TESTS REQUESTS INTERCEPTOR

const nock = require('nock')

module.exports = (active) => {
  active = active === 'true'
  const getInterceptor = ({ urls = [{ name, path: '/', res }] }) => {
    if (!active) return
    urls.forEach( async ({ name, path = '/', res: { statusCode, response } }) => {
      const n = await nock(name).get(path).reply(statusCode, response)
    })
  }

  const interceptor = {
    getInterceptor
  }

  return interceptor
}
