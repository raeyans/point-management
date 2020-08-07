const users = require('./users/users.service.js');
const points = require('./points/points.service.js');
const managePoint = require('./manage-point/manage-point.service.js');
const transactions = require('./transactions/transactions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(points);
  app.configure(managePoint);
  app.configure(transactions);
};
