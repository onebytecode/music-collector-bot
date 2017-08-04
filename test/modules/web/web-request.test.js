// TEST MODULES/WEB WEB-REQUEST

module.exports = ({ chai, assert, expect, webRequest }) => {
  describe('Web-requesr tests', () => {
    it('should make get request', async () => {
      const url = 'https://google.com'
      try {
        const resp = webRequest.get(url)
        console.log(resp);
      } catch (e) {
        console.error(e);
      }
    })
  })
}
