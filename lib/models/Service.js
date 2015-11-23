/**
 * Created by fourq on 11/22/15.
 */
import data from '../fixtures/data';
import _ from 'lodash';


class Service {

  constructor(id, name, requiredCertificationLevel, duration, requiredAge) {
    this.id = id;
    this.name = name;
    this.requiredCertificationLevel = requiredCertificationLevel;
    this.duration = duration;
    this.requiredAge = requiredAge;
  }

  static find(id) {
    let service = _.find(data.services, {ID: id});
    if (service) {
      return new Service(
        service.ID,
        service.Name,
        service.RequiredCertificationLevel,
        service.Duration,
        service.RequiredAge
      );
    }
  }
}


export default Service;
