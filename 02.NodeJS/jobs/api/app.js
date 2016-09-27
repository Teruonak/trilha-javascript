'use strict';

require('./init-database');

const http = require('http');
const port = 4000;

const server = http.createServer();
server.listen(port, () => {
  console.log(`listen port ${port}`);
});
