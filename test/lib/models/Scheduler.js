/**
 * Created by fourq on 11/23/15.
 */
import assert from 'assert';
import _ from 'lodash';
import Scheduler from '../../../lib/models/Scheduler';
import Patient from '../../../lib/models/Patient';
import Provider from '../../../lib/models/Provider';
import Service from '../../../lib/models/Service';


let data = require('../../../lib/fixtures/data').default;

describe('Scheduler', () => {

  it('should return an instance of Scheduler', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', '1763829978');

    assert(scheduler instanceof Scheduler);
  });

  it('should return an instance of Patient', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', '1763829978');

    assert(scheduler.patient instanceof Patient);
  });

  it('should return an instance of Provider', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', '1763829978');

    assert(scheduler.provider instanceof Provider);
  });

  it('should return an instance of Service', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', '1763829978');

    assert(scheduler.service instanceof Service);
  });

  it('should return an array of Appointments for provider ID', () => {
    data.appointments = data.appointments.concat([
      {ID: '100', Patient: '1', Provider: '5', Service: '1', ReasonForVisit: 'Reason One Hundred', When: 1449078278}
    ]);

    let scheduler = new Scheduler('5', '5', '3', 1763829978);

    assert.equal(scheduler.appointments.length, 2); // including one existing

    // cleanup
    _.remove(data.appointments, appointment => {
      return appointment.ID === '100';
    });
  });

  it('should return true when scheduling an appointment between 9am and 4pm', () => {
    let scheduler = new Scheduler('5', '5', '3', 1763829978);

    assert(scheduler.canScheduleNow());
  });

  it('should return false when scheduling an appointment before 9am', () => {
    let scheduler = new Scheduler('5', '5', '3', 1448267972);

    assert(!scheduler.canScheduleNow());
  });

  it('should return false when scheduling an appointment after 4pm', () => {
    let scheduler = new Scheduler('5', '5', '3', 1448333722);

    assert(!scheduler.canScheduleNow());
  });

  it('should return true when scheduling an appointment with a provider that is available', () => {
    let scheduler = new Scheduler('5', '5', '3', 1763829978);

    assert(scheduler.isProviderAvailable());
  });

  it('should return false when scheduling an appointment with a provider that is not available', () => {
    let scheduler = new Scheduler('5', '5', '3', 1449423953);

    assert(!scheduler.isProviderAvailable());
  });

  it('should return true when scheduling an appointment 5 minutes after provider appointment', () => {
    let scheduler = new Scheduler('5', '5', '3', 1449427253);

    assert(scheduler.isProviderAvailable());
  });

  it('should return false when scheduling an appointment 4 minutes after provider appointment', () => {
    let scheduler = new Scheduler('5', '5', '3', 1449427193);

    assert(!scheduler.isProviderAvailable());
  });

  it('should return true when scheduling an appointment that ends 5 minutes before provider appointment', () => {
    let scheduler = new Scheduler('5', '5', '3', 1449421853);

    assert(scheduler.isProviderAvailable());
  });

  it('should return false when scheduling an appointment that ends 4 minutes before provider appointment', () => {
    let scheduler = new Scheduler('5', '5', '3', 1449421913);

    assert(!scheduler.isProviderAvailable());
  });
});
