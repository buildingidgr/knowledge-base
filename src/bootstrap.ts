export default async ({ strapi }) => {
  // Register the article content type if it doesn't exist
  const existingType = await strapi.query('content-type-builder.content-types').findOne({
    where: { singularName: 'article' }
  });

  if (!existingType) {
    console.log('Initializing Article content type...');
    try {
      await strapi.plugin('content-type-builder').services.contentTypes.createContentType({
        contentType: require('./api/article/content-types/article/schema.json')
      });
      console.log('Article content type created successfully');
    } catch (error) {
      console.error('Error creating Article content type:', error);
    }
  }

  // Set default permissions for public role
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (publicRole) {
    const permissions = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({ where: { role: publicRole.id } });

    // Check if article permissions exist
    const hasArticlePermissions = permissions.some(
      (permission) => permission.controller === 'article'
    );

    if (!hasArticlePermissions) {
      console.log('Setting up article permissions...');
      
      // Create permissions for article
      await strapi.query('plugin::users-permissions.permission').create({
        data: {
          action: 'api::article.article.find',
          role: publicRole.id,
          enabled: true,
        },
      });

      await strapi.query('plugin::users-permissions.permission').create({
        data: {
          action: 'api::article.article.findOne',
          role: publicRole.id,
          enabled: true,
        },
      });

      console.log('Article permissions created successfully');
    }
  }
}; 