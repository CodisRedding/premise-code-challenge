/**
 * Created by fourq on 11/22/15.
 */
import data from '../fixtures/data';
import _ from 'lodash';


class Patient {

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static find(id) {
    let patient = _.find(data.patients, {ID: id});
    if (patient) {
      return new Patient(
        patient.ID,
        patient.Name,
        patient.Age
      );
    }
  }
}

export default Patient;
