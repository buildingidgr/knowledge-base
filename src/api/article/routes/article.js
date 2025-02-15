'use strict';

/**
 * article router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
  prefix: '',
  only: ['find', 'findOne', 'create', 'update', 'delete'],
}); 