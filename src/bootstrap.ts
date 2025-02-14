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
}; 