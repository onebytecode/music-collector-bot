// MODULES/WEB ROOT

const request = require('request')
module.exports = () => {

  const webBundle = { request }

  const web-request = require('./web-request')(webBundle)

  const modules = {
    web-request
  }

  return modules
}
