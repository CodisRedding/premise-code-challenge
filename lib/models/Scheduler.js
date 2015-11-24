/**
 * Created by fourq on 11/22/15.
 */
import _ from 'lodash';
import data from '../fixtures/data';
import moment from 'moment';
import Appointment from '../models/Appointment';
import Provider from '../models/Provider';
import Service from '../models/Service';
import Patient from '../models/Patient';


class Scheduler {

  constructor(patientId, providerId, serviceId, when) {
    this.patientId = patientId;
    this.providerId = providerId;
    this.serviceId = serviceId;
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

  get appointments() {
    return Appointment.findAppointmentsByProvider(this.providerId);
  }

  canScheduleNow() {
    // Appointments can only be scheduled between the hours of 9 am and 4pm.
    let hour = moment.utc(this.when).hour();
    return (
      (hour >= data.scheduler.Hours.Start) &&
      (hour <= data.scheduler.Hours.Finish)
    );
  }

  isProviderAvailable() {
    // When booking an appointment the provider should be available meaning
    // not having had their time booked
    var newApptStart = moment.utc(this.when);
    var newApptEnd = moment.utc(this.when)
                       .add(this.service.duration, 'minutes');

    let overlaps = _.reject(this.appointments, appointment => {

      let existingApptStart = moment.utc(appointment.when)
                                .subtract(5, 'minutes');

      let existingApptEnd = moment.utc(appointment.when)
                              .add(appointment.service.duration, 'minutes')
                              .add(5, 'minutes');

      console.log('newStart:', newApptStart.format());
      console.log('newEnd:', newApptEnd.format());
      console.log('exiStart:', existingApptStart.format());
      console.log('exiEnd:', existingApptEnd.format());
      return (
        (newApptEnd.diff(existingApptStart) <= 0) ||
        (newApptStart.diff(existingApptEnd) >= 0)
      );
    });

    return overlaps.length === 0;
  }

  //provider have a certification level equal to or exceeding what is required by the service
  isProviderCertifiedForService() {
    return this.provider.certificationLevel >= this.service.requiredCertificationLevel;
  }

  isPatientAgeAppropriateForService() {
    return this.patient.age >= this.service.requiredAge;
  }
}


export default Scheduler;
