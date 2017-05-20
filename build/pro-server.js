const express = require('express');
const path = require('path');
const config = require('../config');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);

app.use(staticPath, express.static(path.join(__dirname, '../dist/static')));

console.log('> Listening at http://localhost:9200');

app.listen(9200);
