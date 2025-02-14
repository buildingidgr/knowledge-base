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
  'api::article': {
    enabled: true,
    resolve: './src/api/article'
  },
});
