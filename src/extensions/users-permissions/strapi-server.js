'use strict';

module.exports = (plugin) => {
  plugin.contentTypes.role.schema.pluginOptions = {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  };

  plugin.contentTypes.user.schema.pluginOptions = {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  };

  plugin.controllers.role.updateRole = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.isAdmin) {
      return ctx.unauthorized();
    }

    const roleID = ctx.params.id;
    const { permissions } = ctx.request.body;

    const role = await strapi.query('plugin::users-permissions.role').findOne({
      where: { id: roleID },
    });

    if (!role) {
      return ctx.notFound('Role not found');
    }

    // Ensure Article permissions are included
    if (!permissions.application) {
      permissions.application = {};
    }
    if (!permissions.application.article) {
      permissions.application.article = {
        controllers: {
          article: {
            find: { enabled: true },
            findOne: { enabled: true },
          },
        },
      };
    }

    await strapi.query('plugin::users-permissions.role').update({
      where: { id: roleID },
      data: { permissions },
    });

    return { ok: true };
  };

  return plugin;
}; 