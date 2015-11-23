/**
 * Created by fourq on 11/22/15.
 */
import request from 'supertest';
import assert from 'assert';
import app from '../../../lib/app';


describe('Patient routes', () => {

  it('should return status code 200 with valid request params', done => {
    request(app)
      .get('/patient/1')
      .expect(200)
      .end(done);
  });

  it('should return status code 404', done => {
    request(app)
      .get('/patient')
      .expect(404)
      .end(done);
  });

  it('should have a content-type of JSON', done => {
    request(app)
      .get('/patient/1')
      .expect('Content-Type', /json/)
      .end(done);
  });

  it('should return a patient', done => {
    request(app)
      .get('/patient/1')
      .expect({
        data: {
          id: '1',
          name: 'Patient One',
          age: 5
        },
        message: '',
        error: false
      })
      .end(done);
  });

  it('should return a message stating that the patient was not found', done => {
    request(app)
      .get('/patient/6')
      .expect(res => {
        assert.equal(res.body.message, 'Patient not found');
      })
      .end(done);
  });
});
