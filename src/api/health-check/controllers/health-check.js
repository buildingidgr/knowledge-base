'use strict';

/**
 * A set of functions called "actions" for `health-check`
 */

module.exports = {
  async check(ctx) {
    try {
      // Check database connection
      await strapi.db.connection.raw('SELECT 1');
      
      ctx.status = 200;
      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
        uptime: process.uptime()
      };
    } catch (error) {
      ctx.status = 503;
      return {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }
}; 