'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/test',
      handler: 'test.index',
      config: {
        auth: false,
      },
    },
  ],
}; 