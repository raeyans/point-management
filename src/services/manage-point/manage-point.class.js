/* eslint-disable no-unused-vars */
const errors = require('@feathersjs/errors');
const timestamp = require('unix-timestamp');
timestamp.round = true;

exports.ManagePoint = class ManagePoint {

  constructor (options) {
    this.options = options || {};
  }

  setup (app) {
    this.app = app;
  }

  async create (data, params) {
    if ((data.email === undefined) || (data.action === undefined) || (data.point === undefined))
      throw new errors.BadRequest('Request is not valid');

    const users = await this.app.service('users').find({ query: { userEmail: data.email }, paginate: false });
    if (users.length === 0) throw new errors.BadRequest('User is not found');
    const user = users[0];

    const points = await this.app.service('points').find({ query: { userId: user.id }, paginate: false });
    if (points.length === 0) throw new errors.BadRequest('Point data is not found');
    let point = points[0];

    const currentPoint = point.pointQty;
    const upcPoint = Number(data.point);
    if (upcPoint < 1) throw new errors.BadRequest('Invalid point transaction');
    let newPoint = 0, trx = {};

    if (data.action === 'redeem') {
      if (currentPoint >= upcPoint) {
        newPoint = currentPoint - upcPoint;
        trx = await this.app.service('transactions').create({
          pointId: point.id, trxAction: 'redeem', trxPointQty: upcPoint, trxPointCalc: (-1 * upcPoint), trxPointTotal: newPoint
        });
      }
      else
        throw new errors.BadRequest('Redeem failed. Point is not enough to redeem');
    }
    else if (data.action === 'shop') {
      newPoint = currentPoint + Number(data.point);
      trx = await this.app.service('transactions').create({
        pointId: point.id, trxAction: 'shop', trxPointQty: upcPoint, trxPointCalc: upcPoint, trxPointTotal: newPoint
      });
    }
    else
      throw new errors.BadRequest('Action is not recognize');

    point = await this.app.service('points').patch(point.id, { pointQty: newPoint, updatedAt: timestamp.now() });

    return {
      status: 'success',
      message: '',
      data: { user, point, trx }
    };
  }

};
