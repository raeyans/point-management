const { Service } = require('feathers-memory');
const timestamp = require('unix-timestamp');
timestamp.round = true;

exports.Users = class Users extends Service {

  create(data, params) {
    const { email, name } = data;
    const userData = { userEmail: data.email, userName: data.name, createdAt: timestamp.now(), updatedAt: 0 }

    return super.create(userData, params);
  }

  patch(id, data, params) {
    const { email, name } = data;
    
    let userData = super.get(id);
    userData.userEmail = data.email;
    userData.userName = data.name;
    userData.updatedAt = timestamp.now();

    return super.patch(id, userData, params);
  }

};
