/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import Payload from '../../../lib/models/Payload';
import data from '../../../lib/fixtures/data';


describe('Payload', () => {

  it('should return an instance of Payload', () => {
    let payload = Payload.response();

    assert.deepEqual(payload, {data: {}, message: '', error: false});
  });

  it('should have expected default properties', () => {
    let payload = Payload.response();

    assert.equal(Object.keys(payload.data), 0);
    assert.equal(payload.message, '');
    assert.equal(payload.error, false);
  });

  it('should have expected properties', () => {
    let payload = Payload.response({test: true}, 'test', true);

    assert.equal(payload.data.test, true);
    assert.equal(payload.message, 'test');
    assert.equal(payload.error, true);
  });
});
