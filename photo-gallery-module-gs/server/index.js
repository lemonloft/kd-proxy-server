const express = require('express');
const path = require('path');
const model = require('./model.js');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/airbnb/listings/:id', (req, res) => {
  model.getData(req.params.id, res);
});

app.listen(port, () => {});
