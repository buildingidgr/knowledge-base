'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/articles',
      handler: 'api::article.article.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/api/articles/:id',
      handler: 'api::article.article.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 