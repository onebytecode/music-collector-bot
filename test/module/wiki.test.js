// MODULE WIKI TESTS

const chai = require('chai')
const { assert, expect } = chai
const nock = require('nock')

module.exports = ({ modules: { requestBuilder, web } , setup: { interceptor } }) => {
  const { wiki } = requestBuilder
  const { webRequest } = web

  const bands = ['metallica', 'Guns_N\'_Roses', 'slayer', 'sepultura', 'Motley_Crue']
  const paths = []
  const endpoint = 'https://ru.wikipedia.org'
  const apiPath  = '/w/api.php'
  bands.forEach(el => paths.push(wiki.getPage(el)))

  describe('Testing wiki requests', () => {

    bands.forEach((band, index) => {
      it (`should get ${band} page in json`, async () => {
        const path = paths[index]
        // nock(endpoint).get(apiPath).query({
        //   action: ''
        // })
        try {
          const { response: { body, statusCode } } = await webRequest.get(path)
          const b = JSON.parse(body)
          const q = Object.keys(b.query.pages)[0]
          assert.equal(statusCode, 200)
          expect(b).to.be.an('object')
          expect(q).to.not.equal('-1')
        } catch (e) {
          throw new Error(e)
        }
      })
    })
  })
}
