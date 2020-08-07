const assert = require('assert');
const app = require('../../src/app');

describe('\'manage-point\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/mngpts');

    assert.ok(service, 'Registered the service');
  });
});
