/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import Provider from '../../../lib/models/Provider';
import data from '../../../lib/fixtures/data';


describe('Provider', () => {

  it('should return an instance of Provider', () => {
    let provider = new Provider('1', 'name', 900);

    assert(provider instanceof Provider);
  });

  it('should have expected properties', () => {
    let provider = new Provider('1', 'name', 900);

    assert.equal(provider.id, '1');
    assert.equal(provider.name, 'name');
    assert.equal(provider.certificationLevel, 900);
  });

  it('should return an instance of Provider from static find', () => {
    let provider = Provider.find('1');

    assert.equal(provider.id, '1');
    assert.equal(provider.name, 'Provider One');
    assert.equal(provider.certificationLevel, 100);
  });
});
