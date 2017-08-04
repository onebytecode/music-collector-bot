// TESTS SETUP POINT

const chai = require('chai')
const chai-http = require('chai-http')
const assert = chai.assert
const expect = chai.expect

chai.use(chai-http)

module.exports = () => {
  
  const setup = {
    chai,
    assert,
    expect
  }

  return setup
}
