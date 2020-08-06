const { Service } = require('feathers-memory');
const timestamp = require('unix-timestamp');
timestamp.round = true;

exports.Points = class Points extends Service {

  create(data, params) {
    const { userId } = data;
    const pointData = { userId: data.userId, pointQty: 0, createdAt: timestamp.now(), updatedAt: 0 }

    return super.create(pointData, params);
  }

};
