/**
 * Created by fourq on 11/22/15.
 */
import request from 'supertest';
import assert from 'assert';
import app from '../../../lib/app';


describe('Service routes', () => {

  it('should return status code 200 with valid request params', done => {
    request(app)
      .get('/service/1')
      .expect(200)
      .end(done);
  });

  it('should return status code 404', done => {
    request(app)
      .get('/service')
      .expect(404)
      .end(done);
  });

  it('should have a content-type of JSON', done => {
    request(app)
      .get('/service/1')
      .expect('Content-Type', /json/)
      .end(done);
  });

  it('should return a service', done => {
    request(app)
      .get('/service/1')
      .expect({
        data: {
          id: '1',
          name: 'Service One',
          requiredCertificationLevel: 100,
          duration: 10,
          requiredAge: 5
        },
        message: '',
        error: false
      })
      .end(done);
  });

  it('should return a message stating that the service was not found', done => {
    request(app)
      .get('/service/6')
      .expect(res => {
        assert.equal(res.body.message, 'Service not found');
      })
      .end(done);
  });
});
