const getService = require('../services');

module.exports = (app) => {
  app.services = getService(process.env.SERVICE_KIND)
}
