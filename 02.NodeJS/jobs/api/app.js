'use strict';

const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
})

//
// require('./init-database');
//
// const http = require('http');
// const router = require('./router');
//
// // Config Server
// const server = http.createServer((req, res) => {
//   router.proccessRequest(req,res);
// });
//
// // Config Controllers
// require('./controllers/company-controller');
// require('./controllers/user-controller');
//
// // Bind Server
// server.listen(port, () => {
//   console.log(`listen port ${port}`);
// });
