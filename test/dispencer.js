// TESTS DISPENCER

const modules = require('../modules')()

module.exports = (setup) => {
  require('./modules')(modules, setup)
  require('./module')({ modules, setup })
}
