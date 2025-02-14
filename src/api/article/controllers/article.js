'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    console.log('GET /api/articles - Request received');
    console.log('Query parameters:', ctx.query);
    console.log('Headers:', ctx.headers);
    
    try {
      // Check if articles exist in the database
      const articlesCount = await strapi.db.query('api::article.article').count();
      console.log('Total articles in database:', articlesCount);

      // Get raw articles from database
      const rawArticles = await strapi.db.query('api::article.article').findMany({
        where: {
          publishedAt: {
            $notNull: true
          }
        }
      });
      console.log('Raw articles from database:', JSON.stringify(rawArticles, null, 2));

      // Call the default controller
      const { data, meta } = await super.find(ctx);
      console.log('Response data:', JSON.stringify(data, null, 2));
      console.log('Response meta:', JSON.stringify(meta, null, 2));
      
      return { data, meta };
    } catch (error) {
      console.error('Error in articles find controller:', error);
      throw error;
    }
  },

  async findOne(ctx) {
    console.log('GET /api/articles/:id - Request received');
    console.log('Article ID:', ctx.params.id);
    console.log('Headers:', ctx.headers);

    try {
      const { data, meta } = await super.findOne(ctx);
      console.log('Response:', JSON.stringify(data, null, 2));
      return { data, meta };
    } catch (error) {
      console.error('Error in article findOne controller:', error);
      throw error;
    }
  }
})); 