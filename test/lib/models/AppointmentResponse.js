/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import moment from 'moment';
import AppointmentResponse from '../../../lib/models/AppointmentResponse';
import Appointment from '../../../lib/models/Appointment';
import data from '../../../lib/fixtures/data';


describe('AppointmentResponse', () => {

  it('should return an instance of AppointmentResponse', () => {
    let appointmentResponse = new AppointmentResponse();

    assert(true, appointmentResponse instanceof AppointmentResponse);
  });

  it('should add error messages via addError', () => {
    let appointmentResponse = new AppointmentResponse();

    appointmentResponse.addError('error1');
    appointmentResponse.addError('error2');
    appointmentResponse.addError('error3');

    assert(true, appointmentResponse.errors.length === 3);
  });

  it('should add an instance of Appointment via addAppointment', () => {
    let appointmentResponse = new AppointmentResponse();

    appointmentResponse.setAppointment(new Appointment('1', '1', '1', '1', 'reason', moment().unix()));

    assert(appointmentResponse.appointment instanceof Appointment);
  });
});
