const fs = require('fs');
const path = require('path')

const services = fs.readdirSync(path.resolve(__dirname, '../services'));

module.exports = (app) => {
  if (!app.services) {
    app.services = {};
  };

  services.forEach((file) => {
    app.services[`${file.replace('.js', '')}Service`] = require(path.resolve(__dirname, '../services', file));
  });
}
