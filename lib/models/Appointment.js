/**
 * Created by fourq on 11/22/15.
 */
import data from '../fixtures/data';
import _ from 'lodash';
import uuid from 'uuid';
import AppointmentResponse from './AppointmentResponse';
import Scheduler from './Scheduler';
import Provider from './Provider';
import Service from './Service';
import Patient from './Patient';


class Appointment {

  constructor(id, patientId, providerId, serviceId, reasonForVisit, when) {
    this.id = id;
    this.patientId = patientId;
    this.providerId = providerId;
    this.serviceId = serviceId;
    this.reasonForVisit = reasonForVisit;
    this.when = when;
  }

  get patient() {
    return Patient.find(this.patientId);
  }

  get provider() {
    return Provider.find(this.providerId);
  }

  get service() {
    return Service.find(this.serviceId);
  }

  static find(id) {
    let appointment = _.find(data.appointments, {ID: id});
    if (appointment) {
      return new Appointment(
        appointment.ID,
        appointment.Patient,
        appointment.Provider,
        appointment.Service,
        appointment.ReasonForVisit,
        appointment.When
      );
    }
  }

  static schedule(patientId, providerId, serviceId, reasonForVisit, when) {
    let scheduler = new Scheduler(patientId, providerId, serviceId, when);
    let appointmentResponse = new AppointmentResponse();

    if (!scheduler.canScheduleNow()) {
      appointmentResponse.addError('Invalid schedule hours');
    }

    if (!scheduler.isProviderAvailable()) {
      appointmentResponse.addError('Provider cannot schedule at this time');
    }

    if (!scheduler.isProviderCertifiedForService()) {
      appointmentResponse.addError('Provider is not certified for this service');
    }

    if (!scheduler.isPatientAgeAppropriateForService()) {
      appointmentResponse.addError('Patient is not of age for service');
    }

    if (appointmentResponse.errors.length === 0) {
      let id = uuid.v4();
      let appointment = new Appointment(id, patientId, providerId, serviceId, reasonForVisit, when);

      data.appointments.push({
        ID: id,
        Patient: patientId,
        Provider: providerId,
        Service: serviceId,
        ReasonForVisit: reasonForVisit,
        When: when
      });

      appointmentResponse.setAppointment(appointment);
    }

    return appointmentResponse;
  }

  static findAppointmentsByProvider(providerId) {
    let appointments = _.where(data.appointments,  {Provider: providerId});
    appointments = appointments instanceof Array ? appointments : [appointments];

    if (appointments) {
      return appointments.map(appointment => {
        return new Appointment(
          appointment.ID,
          appointment.Patient,
          appointment.Provider,
          appointment.Service,
          appointment.ReasonForVisit,
          appointment.When
        );
      })
    }
  }
}


export default Appointment;
