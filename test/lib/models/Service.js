/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import Service from '../../../lib/models/Service';
import data from '../../../lib/fixtures/data';


describe('Service', () => {

  it('should return an instance of Service', () => {
    let service = new Service('1', 'name', 100, '30', 5);

    assert(service instanceof Service);
  });

  it('should have expected properties', () => {
    let service = new Service('1', 'name', 100, '30', 5);

    assert.equal(service.id, '1');
    assert.equal(service.name, 'name');
    assert.equal(service.requiredCertificationLevel, 100);
    assert.equal(service.duration, 30);
    assert.equal(service.requiredAge, 5);
  });

  it('should return an instance of Service from static find', () => {
    let service = Service.find('1');

    assert.equal(service.id, '1');
    assert.equal(service.name, 'Service One');
    assert.equal(service.requiredCertificationLevel, 100);
    assert.equal(service.duration, 10);
    assert.equal(service.requiredAge, 5);
  });
});
