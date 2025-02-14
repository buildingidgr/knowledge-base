module.exports = () => {
  return async (ctx, next) => {
    if (ctx.path === '/_health') {
      ctx.status = 200;
      ctx.body = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      };
      return;
    }
    await next();
  };
}; 