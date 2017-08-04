// TEST MODULES ROOT

module.exports = (modules, setup) => {
  const { web, requestBuilder } = modules
  const { chai, assert, expect, interceptor } = setup
  const webParams = { web, chai, assert, expect, interceptor }
  require('./web')(webParams)
  require('./request_builder')(requestBuilder)
}
