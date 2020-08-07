// Initializes the `manage-user` service on path `/api/mngusr`
const { ManageUser } = require('./manage-user.class');
const hooks = require('./manage-user.hooks');

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.use('/api/mngusr', new ManageUser(app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/mngusr');

  service.hooks(hooks);
};
