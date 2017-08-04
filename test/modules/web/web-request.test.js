// TEST MODULES/WEB WEB-REQUEST

module.exports = ({ chai, assert, expect, web: { webRequest }, interceptor }) => {
  describe('Web-request tests', () => {
    it('should make get request', async () => {
      const url = 'https://google.com'
      await interceptor.getInterceptor({ urls: [{ name: url, path: '/', response: { statusCode: 200, response: {} } }]})
      try {
        const { response } = await webRequest.get(url + '/')
        assert.equal(response.statusCode, 200)
      } catch (e) {
        throw new  Error(e)
      }
    })
  })
}
