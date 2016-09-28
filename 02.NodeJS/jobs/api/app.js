'use strict';

require('./init-database');

const http = require('http');
const port = 4000;
const Company = require('./model/company-model');
const router = require('./router');

const server = http.createServer((req, res) => {
  router.proccessRequest(req,res);
});

router.get('/companies', (req,res) => {
  res.write(JSON.stringify(Company.get()));
  res.end();
});

router.get('/jobs', (req,res) => {
  res.write('<h1>Jobs</h1>');
  res.end();
})

server.listen(port, () => {
  console.log(`listen port ${port}`);
});
