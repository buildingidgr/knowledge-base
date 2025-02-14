'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    console.log('DEBUG: Article find method called');
    console.log('DEBUG: Query:', ctx.query);
    
    try {
      // Check if articles exist in the database
      const count = await strapi.db.query('api::article.article').count();
      console.log('DEBUG: Total articles in database:', count);

      // Get the raw articles
      const rawArticles = await strapi.db.query('api::article.article').findMany({});
      console.log('DEBUG: Raw articles:', JSON.stringify(rawArticles, null, 2));

      // Call the parent implementation
      const { data, meta } = await super.find(ctx);
      console.log('DEBUG: Response:', { data, meta });
      
      return { data, meta };
    } catch (error) {
      console.error('DEBUG: Error in find method:', error);
      throw error;
    }
  }
})); 