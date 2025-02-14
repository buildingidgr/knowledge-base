module.exports = ({ env }) => ({
  authServiceUrl: env('AUTH_SERVICE_URL', 'https://your-auth-service.com'),
  authServiceApiKey: env('AUTH_SERVICE_API_KEY'),
  // Add any other configuration needed for your auth service
  settings: {
    timeout: 5000, // 5 seconds timeout for auth requests
    cache: {
      enabled: true,
      ttl: 300, // 5 minutes cache
    },
    roles: {
      // Map external roles to Strapi roles
      admin: 'admin',
      editor: 'editor',
      user: 'public',
    },
  },
}); 