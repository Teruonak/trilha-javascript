'use strict';

require('./init-database');

const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {

  res.end();
});
server.listen(port, () => {
  console.log(`listen port ${port}`);
});
