/**
 * Created by fourq on 11/22/15.
 */


var data = {
  providers: [
    {ID: '1', Name: 'Provider One', CertificationLevel: 100},
    {ID: '2', Name: 'Provider Two', CertificationLevel: 200},
    {ID: '3', Name: 'Provider Three', CertificationLevel: 300},
    {ID: '4', Name: 'Provider Four', CertificationLevel: 400},
    {ID: '5', Name: 'Provider Five', CertificationLevel: 500}
  ],
  patients: [
    {ID: '1', Name: 'Patient One', Age: 5},
    {ID: '2', Name: 'Patient Two', Age: 10},
    {ID: '3', Name: 'Patient Three', Age: 15},
    {ID: '4', Name: 'Patient Four', Age: 20},
    {ID: '5', Name: 'Patient Five', Age: 25}
  ],
  services: [
    {ID: '1', Name: 'Service One', RequiredCertificationLevel: 100, Duration: 10, RequiredAge: 5},
    {ID: '2', Name: 'Service Two', RequiredCertificationLevel: 200, Duration: 20, RequiredAge: 10},
    {ID: '3', Name: 'Service Three', RequiredCertificationLevel: 300, Duration: 30, RequiredAge: 15},
    {ID: '4', Name: 'Service Four', RequiredCertificationLevel: 400, Duration: 40, RequiredAge: 20},
    {ID: '5', Name: 'Service Five', RequiredCertificationLevel: 500, Duration: 50, RequiredAge: 25}
  ],
  appointments: [
    {ID: '1', Patient: '1', Provider: '1', Service: '1', ReasonForVisit: 'Reason One', When: "2015-12-31T17:00:00+00:00"},
    {ID: '2', Patient: '2', Provider: '2', Service: '2', ReasonForVisit: 'Reason Two', When: "2015-12-31T18:00:00+00:00"},
    {ID: '3', Patient: '3', Provider: '3', Service: '3', ReasonForVisit: 'Reason Three', When:"2015-12-31T19:00:00+00:00"},
    {ID: '4', Patient: '4', Provider: '4', Service: '4', ReasonForVisit: 'Reason Four', When: "2015-12-31T20:00:00+00:00"},
    {ID: '5', Patient: '5', Provider: '5', Service: '5', ReasonForVisit: 'Reason Five', When: "2015-12-31T21:00:00+00:00"}
  ],
  scheduler: {Hours: {Start: 15, Finish: 22}}
};


export default data;
