export default ({ env }) => ({
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  responses: {
    privateAttributes: [],
  },
  auth: {
    scope: ['find', 'findOne', 'create', 'update', 'delete'],
  },
});
