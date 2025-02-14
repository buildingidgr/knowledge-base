'use strict';

module.exports = ({ strapi }) => {
  // Register the article content type
  strapi.contentTypes['api::article.article'] = require('./content-types/article/schema.json');

  // Register permissions
  const actions = [
    {
      section: 'settings',
      category: 'article',
      displayName: 'Access the Article',
      uid: 'article.read',
      pluginName: 'article',
    },
  ];

  strapi.admin.services.permission.actionProvider.register({
    actions,
  });

  // Register the article in the users-permissions plugin
  const pluginStore = strapi.store({
    environment: '',
    type: 'plugin',
    name: 'users-permissions',
  });

  const grantConfig = {
    article: {
      enabled: true,
      policy: '',
    },
  };

  pluginStore.get({ key: 'grant' }).then(async (data) => {
    await pluginStore.set({
      key: 'grant',
      value: { ...data, ...grantConfig },
    });
  });
}; 