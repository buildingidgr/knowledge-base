'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
  async find(ctx) {
    try {
      const entries = await strapi.entityService.findMany('api::article.article', {
        ...ctx.query,
      });
      return { data: entries };
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const entry = await strapi.entityService.findOne('api::article.article', id, {
        ...ctx.query,
      });
      return { data: entry };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}; 