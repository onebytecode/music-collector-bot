// TEST ROOT

module.exports = () => {

  const setup = require('./setup.test')()
  
  require('./dispencer')(setup)

}
