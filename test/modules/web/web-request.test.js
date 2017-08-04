// TEST MODULES/WEB WEB-REQUEST

module.exports = ({ chai, assert, expect, webRequest }) => {
  describe('Web-request tests', () => {
    it('should make get request', async () => {
      const url = 'https://google.com'
      try {
        const { response } = await webRequest.get(url)
        assert(response.statusCode, 200)
      } catch (e) {
        console.error(e);
      }
    })
  })
}
