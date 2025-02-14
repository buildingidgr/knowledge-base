'use strict';

/**
 * article router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/articles',
      handler: 'article.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/api/articles/:id',
      handler: 'article.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 