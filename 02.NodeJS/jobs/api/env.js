'use strict';

// will contain all the configurations

const env = {};

env.server = {
  port: process.env.SERVER_PORT || 4000
}

module.exports = env;
