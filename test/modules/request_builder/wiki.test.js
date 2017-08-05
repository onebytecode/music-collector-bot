// WIKI REQUEST MODULE TEST
const assert = require('chai').assert
module.exports = (wiki) => {
  describe('Bands pages requests tests', () => {
    const endpoint = "https://ru.wikipedia.org/w/api.php?action=query&titles={0}&format=json"
    const bands = ['guns and roses', 'metallica', 'three solo play er s']
    const expectations = [
      endpoint.replace('{0}', 'Guns_And_Roses'),
      endpoint.replace('{0}', 'Metallica'),
      endpoint.replace('{0}', 'Three_Solo_Play_Er_S')
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
      endpoint.replace('{0}', 'Guns_And_Roses'),
      endpoint.replace('{0}', 'Slayer'),
      endpoint.replace('{0}', 'Megadeth')
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
