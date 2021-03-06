// BANDS REQUEST MODULE TEST
const assert = require('chai').assert
module.exports = (bandsRequest) => {
  describe('Bands requests tests', () => {
    it('should get aerosmith wiki path', done => {
      const name = 'Aerosmith'
      const expected = 'https://ru.wikipedia.org/w/api.php?action=query&titles=Aerosmith&format=json'
      const path = bandsRequest.getWikiBandPath(name)
      assert.equal(path, expected)
      done()
    })
  })
}
