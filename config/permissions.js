'use strict';

module.exports = {
  permissions: {
    application: {
      article: {
        enabled: true,
        actions: ['find', 'findOne', 'create', 'update', 'delete']
      }
    }
  }
}; 