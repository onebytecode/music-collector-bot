// MODULE WIKI TESTS

const chai = require('chai')
const { assert, expect } = chai

module.exports = ({ requestBuilder, web }) => {
  const { wiki } = requestBuilder
  const { webRequest } = web

  const bands = ['metallica', 'guns n\' roses', 'slayer', 'sepultura', 'motley crue']
  const paths = []
  bands.forEach(el => paths.push(wiki.getPage(el)))

  describe('Testing wiki requests', () => {
    bands.forEach((band, index) => {
      it (`should get ${band} page in json`, async () => {
        const path = paths[index]
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
