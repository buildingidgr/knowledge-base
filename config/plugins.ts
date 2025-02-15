export default ({ env }) => ({
  'users-permissions': {
    enabled: true,
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: process.env.JWT_SECRET,
      permissions: {
        application: {
          controllers: {
            article: {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        }
      }
    },
  },
  'content-manager': {
    enabled: true,
  },
  'content-type-builder': {
    enabled: true,
  },
});
