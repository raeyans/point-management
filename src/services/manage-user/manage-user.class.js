/* eslint-disable no-unused-vars */
const errors = require('@feathersjs/errors');
const timestamp = require('unix-timestamp');
timestamp.round = true;

exports.ManageUser = class ManageUser {

  constructor (options) {
    this.options = options || {};
  }

  setup (app) {
    this.app = app;
  }

  async create (data, params) {
    if ((data.email === undefined) || (data.name === undefined))
      throw new errors.BadRequest('Request is not valid');

    const users = await this.app.service('users').find({ query: { userEmail: data.email }, paginate: false });
    if (users.length > 0) throw new errors.BadRequest('User already exist');

    const user = await this.app.service('users').create({ email: data.email, name: data.name });
    const point = await this.app.service('points').create({ userId: user.id });

    return {
      status: 'success',
      message: '',
      data: { user, point }
    };
  }

};
