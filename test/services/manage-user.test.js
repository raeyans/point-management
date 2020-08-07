const assert = require('assert');
const app = require('../../src/app');

describe('\'manage-user\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/mngusr');

    assert.ok(service, 'Registered the service');
  });
});
