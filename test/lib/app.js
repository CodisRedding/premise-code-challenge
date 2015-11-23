/**
 * Created by fourq on 11/21/15.
 */
import assert from 'assert';
import _ from 'lodash';
import app from '../../lib/app';


describe('Express config', () => {

  it('should find a JSON parser in configured routes', () => {
    let layer = _.find(app._router.stack, {name: 'jsonParser'});
    assert.equal(layer.name, 'jsonParser');
  });

  it('should find a URL encoded parser in configured routes', () => {
    let layer = _.find(app._router.stack, {name: 'urlencodedParser'});
    assert.equal(layer.name, 'urlencodedParser');
  });
});
