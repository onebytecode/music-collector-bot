// REQUEST BUILDER HELPERS TEST

const { assert } = require('chai')

module.exports = ({ normalizeName, normalize }) => {
  describe('Testing request builder helpers', () => {
    it ('should make first char uppercase', done => {
      const a = "string"
      const b = "String"
      assert.equal(a.upperHigh(), b)
      done()
    })

    const names = ['guns and roses', "blackJack", "very long term of service"]
    const exp = ['Guns_And_Roses', 'BlackJack', 'Very_Long_Term_Of_Service']
    names.forEach((name, i) => {
      it(`#normalizeName ${name}`, done => {
        assert.equal(normalizeName(name), exp[i])
        done()
      })

      it(`#normalize ${name}`, done => {
        assert.equal(normalize({ type: 'name', el: name }), exp[i])
        done()
      })
    })

  })
}
