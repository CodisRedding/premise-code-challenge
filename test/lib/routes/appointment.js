/**
 * Created by fourq on 11/22/15.
 */
import request from 'supertest';
import assert from 'assert';
import app from '../../../lib/app';


describe('Appointment routes', () => {

  it('should return status code 200 with valid request params', done => {
    request(app)
      .get('/appointment/1')
      .expect(200)
      .end(done);
  });

  it('should return status code 404', done => {
    request(app)
      .get('/appointment')
      .expect(404)
      .end(done);
  });

  it('should have a content-type of JSON', done => {
    request(app)
      .get('/appointment/1')
      .expect('Content-Type', /json/)
      .end(done);
  });

  it('should return a appointment', done => {
    request(app)
      .get('/appointment/1')
      .expect({
        data: {
          id: '1',
          patientId: '1',
          providerId: '1',
          serviceId: '1',
          reasonForVisit: 'Reason One',
          when: "2015-12-31T17:00:00+00:00"
        },
        message: '',
        error: false
      })
      .end(done);
  });

  it('should return a message stating that the appointment was not found', done => {
    request(app)
      .get('/appointment/6')
      .expect(res => assert.equal(res.body.message, 'Appointment not found'))
      .end(done);
  });

  it('should schedule an appointment', done => {
    let when = "2015-12-31T19:00:00+00:00";
    request(app)
      .post(`/appointment/schedule/5/5/3/Reason/${when}`)
      .expect(200)
      .expect(res => {
        assert.equal(res.body.data.appointment.patientId, '5');
        assert.equal(res.body.data.appointment.providerId, '5');
        assert.equal(res.body.data.appointment.serviceId, '3');
        assert.equal(res.body.data.appointment.reasonForVisit, 'Reason');
        assert.equal(res.body.data.appointment.when, when);
        assert.equal(res.body.message.length, 0);
        assert.equal(res.body.data.errors.length, 0);
        assert.equal(res.body.error, false);
      })
      .end(done);
  });
});
