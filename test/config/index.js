// TESTS CONFIG ROOT

module.exports = () => {
  const interceptor = require('./interceptor')

  const config = {
    interceptor
  }

  return config
}
