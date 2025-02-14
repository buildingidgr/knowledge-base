export default ({ env }) => ({
  'users-permissions': {
    enabled: true,
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: process.env.JWT_SECRET,
    },
  },
  'content-manager': {
    enabled: true,
  },
  'content-type-builder': {
    enabled: true,
  },
});
