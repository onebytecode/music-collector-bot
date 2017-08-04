// MODULES/WEB ROOT

const request = require('request')
module.exports = () => {

  const webBundle = { request }

  const webRequest = require('./web-request')(webBundle)

  const modules = {
    webRequest
  }

  return modules
}
