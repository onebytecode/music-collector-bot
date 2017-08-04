// MODULES ROOT

module.exports = () => {
  const web = require('./web')()

  const modules = {
    web
  }

  return modules
}
