/**
 * Created by fourq on 11/22/15.
 */
import _ from 'lodash';
import data from '../fixtures/data';


class Provider {

  constructor(id, name, certificationLevel) {
    this.id = id;
    this.name = name;
    this.certificationLevel = certificationLevel;
  }

  static find(id) {
    let provider = _.find(data.providers, {ID: id});
    if (provider) {
      return new Provider(
        provider.ID,
        provider.Name,
        provider.CertificationLevel
      );
    }
  }
}


export default Provider;
