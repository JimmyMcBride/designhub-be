const request = require('supertest');
const server = require('../server');

// initial test
describe('/ Test route', () => {
  it('• should return status 200', async done => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    done();
  });
});
