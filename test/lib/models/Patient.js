/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import Patient from '../../../lib/models/Patient';
import data from '../../../lib/fixtures/data';


describe('Patient', () => {

  it('should return an instance of Patient', () => {
    let patient = new Patient('1', 'name', 25);

    assert(patient instanceof Patient);
  });

  it('should have expected properties', () => {
    let patient = new Patient('1', 'name', 25);

    assert.equal(patient.id, '1');
    assert.equal(patient.name, 'name');
    assert.equal(patient.age, 25);
  });

  it('should return an instance of Patient from static find', () => {
    let patient = Patient.find('1');

    assert.equal(patient.id, '1');
    assert.equal(patient.name, 'Patient One');
    assert.equal(patient.age, 5);
  });
});
