const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const config = require('./config');

app.use(cors())
app.use(bodyParser.json())
app.use(config.authMiddleware);

config.setupServices(app);
config.setupRouter(app);

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log('Track Your Money Api Running!')
});
