/**
 * Created by fourq on 11/22/15.
 */
import request from 'supertest';
import assert from 'assert';
import app from '../../../lib/app';


describe('Provider routes', () => {

  it('should return status code 200 with valid request params', done => {
    request(app)
      .get('/provider/1')
      .expect(200)
      .end(done);
  });

  it('should return status code 404', done => {
    request(app)
      .get('/provider')
      .expect(404)
      .end(done);
  });

  it('should have a content-type of JSON', done => {
    request(app)
      .get('/provider/1')
      .expect('Content-Type', /json/)
      .end(done);
  });

  it('should return a provider', done => {
    request(app)
      .get('/provider/1')
      .expect({
        data: {
          id: '1',
          name: 'Provider One',
          certificationLevel: 100
        },
        message: '',
        error: false
      })
      .end(done);
  });

  it('shouuld return a message stating that the provider was not found', done => {
    request(app)
      .get('/provider/6')
      .expect(res => {
        assert.equal(res.body.message, 'Provider not found');
      })
      .end(done);
  });
});
