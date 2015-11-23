/**
 * Created by fourq on 11/22/15.
 */
import Appointment from './Appointment';


class AppointmentResponse {

  constructor() {
    this.errors = [];
    this.appointment = undefined;
  }

  addError(error) {
    this.errors.push(error);
  }

  setAppointment(value) {
    if (value instanceof Appointment) {
      this.appointment = value;
    }
  }
}

export default AppointmentResponse;
