const express = require('express');
const app = express();

const config = require('./config');

config.setupServices(app);
config.setupRouter(app);

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log('Track Your Money Api Running!')
});
