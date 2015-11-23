/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import moment from 'moment';
import _ from 'lodash';
import Appointment from '../../../lib/models/Appointment';
import Patient from '../../../lib/models/Patient';
import Provider from '../../../lib/models/Provider';
import Service from '../../../lib/models/Service';


let data = require('../../../lib/fixtures/data').default;

describe('Appointment', () => {

  it('should return an instance of Appointment', () => {
    let appointment = new Appointment('1', '1', '1', '1', 'reason', moment().unix());

    assert(appointment instanceof Appointment);
  });

  it('should return an instance of Patient', () => {
    let appointment = new Appointment('1', '1', '1', '1', 'reason', moment().unix());

    assert(appointment.patient instanceof Patient);
  });

  it('should return an instance of Provider', () => {
    let appointment = new Appointment('1', '1', '1', '1', 'reason', moment().unix());

    assert(appointment.provider instanceof Provider);
  });

  it('should return an instance of Service', () => {
    let appointment = new Appointment('1', '1', '1', '1', 'reason', moment().unix());

    assert(appointment.service instanceof Service);
  });

  it('should return an instance of Appointment from static find', () => {
    let appointment = new Appointment.find('1');

    assert(appointment instanceof Appointment);
  });

  it('should return an instance of Appointment from static schedule', () => {
    let epoch = '1763829978';
    let appointmentResponse = Appointment.schedule('5', '5', '3', 'Reason', epoch);

    assert(appointmentResponse.appointment instanceof Appointment);
    assert.equal(appointmentResponse.appointment.patientId, '5');
    assert.equal(appointmentResponse.appointment.providerId, '5');
    assert.equal(appointmentResponse.appointment.serviceId, '3');
    assert.equal(appointmentResponse.appointment.reasonForVisit, 'Reason');
    assert.equal(appointmentResponse.appointment.when, epoch);

    // cleanup
    _.remove(data.appointments, appointment => {
      return appointment.ID === appointmentResponse.appointment.id;
    });
  });

  it('should return an array of Appointments for provider ID', () => {
    data.appointments = data.appointments.concat([
      {ID: '100', Patient: '1', Provider: '100', Service: '1', ReasonForVisit: 'Reason One', When: 1449078278},
      {ID: '200', Patient: '2', Provider: '100', Service: '2', ReasonForVisit: 'Reason Two', When: 1449164695},
      {ID: '300', Patient: '3', Provider: '100', Service: '3', ReasonForVisit: 'Reason Three', When: 1449251111},
      {ID: '400', Patient: '4', Provider: '100', Service: '4', ReasonForVisit: 'Reason Four', When: 1449337535},
      {ID: '500', Patient: '5', Provider: '100', Service: '5', ReasonForVisit: 'Reason Five', When: 1449423953}
    ]);

    let appointments = Appointment.findAppointmentsByProvider('100');

    assert.equal(appointments.length, 5);

    // cleanup
    _.remove(data.appointments, appointment => {
      return appointment.ProviderId === 100;
    });
  });
});
