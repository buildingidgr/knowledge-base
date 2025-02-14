'use strict';

/**
 * article router
 */

module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/api/articles',
     handler: 'api::article.article.find',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'GET',
     path: '/api/articles/:id',
     handler: 'api::article.article.findOne',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/api/articles',
     handler: 'api::article.article.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'PUT',
     path: '/api/articles/:id',
     handler: 'api::article.article.update',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'DELETE',
     path: '/api/articles/:id',
     handler: 'api::article.article.delete',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
}; 