module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    try {
      // Skip authentication for public routes
      if (ctx.path.startsWith('/api/auth') || ctx.path.startsWith('/api/public')) {
        return await next();
      }

      const authHeader = ctx.request.header.authorization;
      if (!authHeader) {
        return ctx.throw(401, 'Authorization header missing');
      }

      // Extract the token
      const token = authHeader.split(' ')[1];
      if (!token) {
        return ctx.throw(401, 'Invalid authorization header format');
      }

      try {
        // Here you would implement the verification with your third-party auth service
        // This is a placeholder for your actual authentication logic
        const verifyResult = await verifyWithExternalService(token);
        
        if (!verifyResult.isValid) {
          return ctx.throw(401, 'Invalid token');
        }

        // Add user information to the context
        ctx.state.user = {
          id: verifyResult.userId,
          role: verifyResult.role,
          // Add any other relevant user information
        };

        await next();
      } catch (error) {
        strapi.log.error('Authentication error:', error);
        return ctx.throw(401, 'Authentication failed');
      }
    } catch (error) {
      strapi.log.error('Middleware error:', error);
      return ctx.throw(500, 'Internal server error');
    }
  };
};

// Placeholder function - Replace with actual implementation
async function verifyWithExternalService(token) {
  // TODO: Implement actual verification logic with your third-party auth service
  // This should make an HTTP request to your auth service to verify the token
  // Return format should be: { isValid: boolean, userId: string, role: string }
  throw new Error('Token verification not implemented');
} 