// Initializes the `manage-point` service on path `/api/mngpts`
const { ManagePoint } = require('./manage-point.class');
const hooks = require('./manage-point.hooks');

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.use('/api/mngpts', new ManagePoint(app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/mngpts');

  service.hooks(hooks);
};
