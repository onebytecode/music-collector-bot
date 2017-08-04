// TESTS SETUP POINT

const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const expect = chai.expect

chai.use(chaiHttp)

module.exports = () => {

  const setup = {
    chai,
    assert,
    expect
  }

  return setup
}
