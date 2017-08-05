// MODULE WIKI TESTS

const chai = require('chai')
const { assert, expect } = chai

module.exports = ({ requestBuilder, web }) => {
  const { wiki } = requestBuilder
  const { webRequest } = web

  const bands = ['metallica', 'guns and roses', 'slayer']
  const paths = []
  bands.forEach(el => paths.push(wiki.getBand(el)))

  describe('Testing wiki requests', () => {
    bands.forEach((band, index) => {
      it (`should get ${band} page in json`, async () => {
        const path = paths[index]
        try {
          const { response: { body, statusCode } } = await webRequest.get(path)
          console.log(body);
          const b = JSON.parse(body)
          assert.equal(statusCode, 200)
          expect(b).to.be.an('object')
        } catch (e) {
          throw new Error(e)
        }
      })
    })
  })
}
