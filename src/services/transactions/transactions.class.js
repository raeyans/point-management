const { Service } = require('feathers-memory');
const timestamp = require('unix-timestamp');
timestamp.round = true;

exports.Transactions = class Transactions extends Service {

  create(data, params) {
    const { pointId, trxAction, trxPointQty, trxPointCalc, trxPointTotal, trxDt } = data;
    const trxData = { pointId, trxAction, trxPointQty, trxPointCalc, trxPointTotal, trxDt: timestamp.now() }

    return super.create(trxData, params);
  }

};
