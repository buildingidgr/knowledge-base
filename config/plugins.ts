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
  'i18n': {
    enabled: true,
    config: {
      locales: ['en'],
      defaultLocale: 'en',
    }
  },
  'content-manager': {
    enabled: true,
  },
  'content-type-builder': {
    enabled: true,
  },
});
