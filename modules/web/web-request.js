// MODULES/WEB WEB-REQUEST


module.exports = ({ request }) => {
  const get  =  async (url) => {
    const response = await request.get(url)
    return response
  }

  const methods = {
    get
  }

  return methods
}
