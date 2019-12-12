const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '/public/lib')));

app.use('http://localhost:3001/bundle.js', express.static(path.join(__dirname, '../reservation-module/public/bundle.js')));
app.use('http://localhost:3002/bundle.js', express.static(path.join(__dirname, '../suggestions-module/public/bundle.js')));
app.use('http://localhost:3003/bundle.js', express.static(path.join(__dirname, '../photo-gallery-module-gs/public/bundle.js')));
app.use('http://localhost:3004/index.js', express.static(path.join(__dirname, '../reviews-module/public/index.js')));

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});