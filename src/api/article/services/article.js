'use strict';

/**
 * article service
 */

module.exports = {
  async find(params) {
    return await strapi.db.query('api::article.article').findMany(params);
  },

  async findOne(id, params) {
    return await strapi.db.query('api::article.article').findOne({
      where: { id },
      ...params,
    });
  },
}; 