'use strict';

/**
 * article controller
 */

module.exports = {
  async find(ctx) {
    try {
      const entries = await strapi.entityService.findMany('api::article.article', {
        ...ctx.query,
      });

      const sanitizedEntries = await this.sanitizeOutput(entries, ctx);

      return {
        data: sanitizedEntries,
        meta: { count: sanitizedEntries.length },
      };
    } catch (error) {
      console.error('Error in find method:', error);
      ctx.throw(500, error);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const entry = await strapi.entityService.findOne('api::article.article', id, {
        ...ctx.query,
      });

      const sanitizedEntry = await this.sanitizeOutput(entry, ctx);

      return {
        data: sanitizedEntry,
      };
    } catch (error) {
      console.error('Error in findOne method:', error);
      ctx.throw(500, error);
    }
  },

  async sanitizeOutput(data, ctx) {
    const auth = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);
    
    return await strapi.entityService.sanitizeOutput(data, 'api::article.article', {
      auth,
    });
  },
}; 