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

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});