'use strict';

const app = require('../app');
const env = require('../env');

const port = env.server.port;

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
