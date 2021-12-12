const fs = require('fs');
const path = require('path')
const Router = require('express').Router;

const routers = fs.readdirSync(path.resolve(__dirname, '../routes'));

module.exports = (app) => {
  const coreRouter = Router();

  routers.map((file) => {
    const route = file.replace('.js', '');
    const middleware = require(path.resolve(__dirname, '../routes', file));

    coreRouter.use(`/${route}`, middleware(app.services));
  });

  app.use(coreRouter);
}
