// TESTS SETUP POINT

const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const expect = chai.expect
const intercept = process.env.INTERCEPT
const config = require('./config')()
const interceptor = config.interceptor(intercept)

chai.use(chaiHttp)

module.exports = () => {
  console.log('Intercept: ', intercept);

  const setup = {
    chai,
    assert,
    expect,
    interceptor
  }

  return setup
}
