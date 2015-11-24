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

  let scheduleTime = "2015-12-31T19:00:00+00:00";

  it('should return an instance of Scheduler', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', scheduleTime);

    assert(scheduler instanceof Scheduler);
  });

  it('should return an instance of Patient', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', scheduleTime);

    assert(scheduler.patient instanceof Patient);
  });

  it('should return an instance of Provider', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', scheduleTime);

    assert(scheduler.provider instanceof Provider);
  });

  it('should return an instance of Service', () => {
    let scheduler = new Scheduler('5', '5', '3', 'Reason', scheduleTime);

    assert(scheduler.service instanceof Service);
  });

  it('should return an array of Appointments for provider ID', () => {
    data.appointments = data.appointments.concat([
      {ID: '100', Patient: '1', Provider: '5', Service: '1', ReasonForVisit: 'Reason One Hundred', When: scheduleTime}
    ]);

    let scheduler = new Scheduler('5', '5', '3', scheduleTime);

    assert.equal(scheduler.appointments.length, 2); // including one existing

    // cleanup
    _.remove(data.appointments, appointment => {
      return appointment.ID === '100';
    });
  });

  it('should return true when scheduling an appointment between 9am and 4pm', () => {
    let scheduler = new Scheduler('5', '5', '3', "2015-12-31T19:00:00+00:00");

    assert(scheduler.canScheduleNow());
  });

  it('should return false when scheduling an appointment before 9am', () => {
    let scheduler = new Scheduler('5', '5', '3', "2015-12-31T14:00:00+00:00");

    assert(!scheduler.canScheduleNow());
  });

  it('should return false when scheduling an appointment after 4pm', () => {
    let scheduler = new Scheduler('5', '5', '3', "2015-12-31T23:00:00+00:00");

    assert(!scheduler.canScheduleNow());
  });

  it('should return true when scheduling an appointment with a provider that is available', () => {
    let scheduler = new Scheduler('5', '1', '1', "2015-12-31T15:00:00+00:00");

    assert(scheduler.isProviderAvailable());
  });

  it('should return false when scheduling an appointment with a provider that is not available', () => {
    let scheduler = new Scheduler('5', '1', '1', "2015-12-31T17:00:00+00:00");

    assert(!scheduler.isProviderAvailable());
  });

  it('should return true when scheduling an appointment 5 minutes after provider appointment', () => {
    let scheduler = new Scheduler('5', '1', '1', "2015-12-31T17:15:00+00:00");

    assert(scheduler.isProviderAvailable());
  });

  it('should return false when scheduling an appointment 4 minutes after provider appointment', () => {
    let scheduler = new Scheduler('5', '1', '1', "2015-12-31T17:14:00+00:00");

    assert(!scheduler.isProviderAvailable());
  });

  it('should return true when scheduling an appointment that ends 5 minutes before provider appointment', () => {
    let scheduler = new Scheduler('5', '1', '1', "2015-12-31T16:45:00+00:00");

    assert(scheduler.isProviderAvailable());
  });

  it('should return false when scheduling an appointment that ends 4 minutes before provider appointment', () => {
    let scheduler = new Scheduler('5', '1', '1', "2015-12-31T16:46:00+00:00");

    assert(!scheduler.isProviderAvailable());
  });
});
