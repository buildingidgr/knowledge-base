export default ({ env }) => ({
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  validator: {
    contentTypes: {
      article: {
        enabled: true,
      },
    },
  },
});
