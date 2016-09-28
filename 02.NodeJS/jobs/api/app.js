'use strict';

require('./init-database');

const http = require('http');
const port = 4000;
const router = require('./router');

// Config Server
const server = http.createServer((req, res) => {
  router.proccessRequest(req,res);
});

// Config Controllers
require('./controllers/company-controller');

// Bind Server
server.listen(port, () => {
  console.log(`listen port ${port}`);
});
