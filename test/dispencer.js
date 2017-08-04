// TESTS DISPENCER

const modules = require('../modules')()

module.exports = (setup) => {
  require('./modules')(modules, setup)
}
