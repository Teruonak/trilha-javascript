'use strict';

require('./init-database');

const http = require('http');
const port = 4000;
const Company = require('./model/company-model');

const server = http.createServer((req, res) => {
  if (req.url === '/companies') {
    res.write(JSON.stringify(Company.get()));
  }
  res.end();
});
server.listen(port, () => {
  console.log(`listen port ${port}`);
});
