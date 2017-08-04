// MODULES/WEB WEB-REQUEST


module.exports = ({ request }) => {
  const get  =  (url) => {
    return new Promise((resolve, reject) => {
      request.get(url, (err, response, body) => {
        if (err) return reject(err)
        resolve({ response, body })
      })
    })
  }

  const methods = {
    get
  }

  return methods
}
