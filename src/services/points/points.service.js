// Initializes the `points` service on path `/points`
const { Points } = require('./points.class');
const hooks = require('./points.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/points', new Points(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('points');

  service.hooks(hooks);
};
