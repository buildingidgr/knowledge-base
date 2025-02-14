'use strict';

const article = require('./content-types/article/schema.json');
const createArticle = require('./controllers/article');
const articleRoutes = require('./routes/article');
const articleService = require('./services/article');

module.exports = {
  article,
  routes: articleRoutes,
  controllers: {
    article: createArticle,
  },
  services: {
    article: articleService,
  },
}; 