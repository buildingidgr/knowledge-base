'use strict';

module.exports = {
  async index(ctx) {
    console.log('Test route hit!');
    return { message: 'Test API works!' };
  },
}; 