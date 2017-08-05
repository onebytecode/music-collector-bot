// WIKI REQUEST MODULE TEST
const assert = require('chai').assert
module.exports = (wiki) => {
  describe('Bands pages requests tests', () => {
    const endpoint = "https://ru.wikipedia.org/w/api.php?action=query&titles={0}&format=json"
    const bands = ['guns and roses', 'metallica', 'three solo play er s']
    const expectations = [
      endpoint.replace('{0}', 'guns%20and%20roses'),
      endpoint.replace('{0}', 'metallica'),
      endpoint.replace('{0}', 'three%20solo%20play%20er%20s')
    ]

    bands.forEach((band, i) => {
      it(`should get ${band} wiki path`, done => {
        const path = wiki.getPage(band)
        assert.equal(path, expectations[i])
        done()
      })
    })
  })

  describe('Categories path tests', () => {
    const endpoint = "https://ru.wikipedia.org/w/api.php?action=query&titles={0}&format=json&prop=categories"
    const bands = ['guns and roses', "slayer", 'megadeth']
    const expectations = [
      endpoint.replace('{0}', 'guns%20and%20roses'),
      endpoint.replace('{0}', 'slayer'),
      endpoint.replace('{0}', 'megadeth')
    ]

    bands.forEach((band, i) => {
      it(`should get ${band} wiki categories path`, done => {
        const path = wiki.getCategories(band)
        assert.equal(path, expectations[i])
        done()
      })
    })
  })
}
