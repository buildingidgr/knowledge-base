module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/_health',
      handler: 'health.check',
      config: {
        auth: false,
        policies: [],
      }
    }
  ]
}; 