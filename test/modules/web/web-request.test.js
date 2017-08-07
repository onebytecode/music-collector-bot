// TEST MODULES/WEB WEB-REQUEST

const chai = require('chai')
const nock = require('nock')
const {assert, expect} = chai
module.exports = ({ web: { webRequest }, interceptor }) => {
  describe('Web-request tests', () => {
    it('should make get request', async () => {
      const url = 'https://google.com'
      await interceptor.getInterceptor({ urls: [{ name: url, path: '/', res: { statusCode: 200, response: {} } }]})
      try {
        const { response } = await webRequest.get(url + '/')
        assert.equal(response.statusCode, 200)
      } catch (e) {
        throw new  Error(e)
      }
    })
    it ('should return error', async () => {
      const url = "https://nevermind.com"
      nock(url).get('/').replyWithError({ message: "Some error", statusCode: 404 })
      try {
        const { response } = await webRequest.get(url)
        throw new Error('Should not be response')
      } catch (e) {
        assert.equal(e.statusCode, 404)
      }
    })
  })
}
