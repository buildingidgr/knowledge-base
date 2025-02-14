module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/_health',
      handler: 'health-check.check',
      config: {
        auth: false,
        policies: [],
        middlewares: []
      }
    }
  ]
}; 