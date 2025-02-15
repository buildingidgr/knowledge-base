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

  // Find the public role
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (publicRole) {
    // Create article permissions
    const actions = [
      'api::article.article.find',
      'api::article.article.findOne'
    ];

    const permissions = await Promise.all(
      actions.map(action => {
        return strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: action,
            role: publicRole.id,
            enabled: true
          }
        });
      })
    );

    if (permissions.length > 0) {
      console.log('Article permissions created successfully');
    }
  }
}; 