'use strict';

/**
 * article controller
 */

module.exports = {
  async find(ctx) {
    try {
      const articles = await strapi.service('api::article.article').find(ctx.query);
      return articles;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const article = await strapi.service('api::article.article').findOne(id, ctx.query);
      return article;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async create(ctx) {
    try {
      const article = await strapi.service('api::article.article').create(ctx.request.body);
      return article;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const article = await strapi.service('api::article.article').update(id, ctx.request.body);
      return article;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;
      const article = await strapi.service('api::article.article').delete(id);
      return article;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}; 