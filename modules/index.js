// MODULES ROOT

module.exports = () => {
  const web = require('./web')()
  const requestBuilder = require('./request_builder')()

  const modules = {
    web,
    requestBuilder
  }

  return modules
}
