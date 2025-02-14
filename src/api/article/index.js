'use strict';

const register = require('./register');
const controllers = require('./controllers/article');
const routes = require('./routes/article');
const contentTypes = require('./content-types/article/schema.json');

module.exports = {
  register,
  controllers,
  routes,
  contentTypes: {
    article: { schema: contentTypes }
  },
}; 