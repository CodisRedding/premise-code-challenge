# Coding Challenge

## Install

    $ npm install
    
## Development

    $ npm run dev
    
## Testing

    $ npm test
    
## Build

    $ npm run build
    
## Serve Production

    $ npm run serve

## Service

Arguments | Info
--------- | ----
id | String

Get service by ID

    GET /service/1 HTTP/1.1
    Host: localhost:3000

    $ curl -X GET 'http://localhost:3000/service/1'
    
    {
      "data": {
        "id": "1",
        "name": "Service One",
        "requiredCertificationLevel": 100,
        "duration": 10,
        "requiredAge": 5
      },
      "message": "",
      "error": false
    } 
    
    
## Provider

Arguments | Info
--------- | ----
id | String

Get provider by ID

    GET /provider/1 HTTP/1.1
    Host: localhost:3000

    $ curl -X GET 'http://localhost:3000/provider/1'
   
    {
      "data": {
        "id": "1",
        "name": "Provider One",
        "certificationLevel": 100
      },
      "message": "",
      "error": false
    }
    
## Patient

Arguments | Info
--------- | ----
id | String

Get patient by ID

    GET /patient/1 HTTP/1.1
    Host: localhost:3000
    
    $ curl -X GET 'http://localhost:3000/patient/1'
    
    {
      "data": {
        "id": "1",
        "name": "Patient One",
        "age": 5
      },
      "message": "",
      "error": false
    }
    
## Appointment

Arguments | Info
--------- | ----
id | String

Get appointment by ID

    GET /appointment/1 HTTP/1.1
    Host: localhost:3000
    
    $ curl -X GET 'http://localhost:3000/appointment/1'
    
    {
      "data": {
        "id": "1",
        "patientId": "1",
        "providerId": "1",
        "serviceId": "1",
        "reasonForVisit": "Reason One",
        "when": "2015-12-31T17:00:00+00:00"
      },
      "message": "",
      "error": false
    }
    
Schedule an appointment

Arguments | Info
--------- | ----
patient_id | String
provider_id | String
service_id | String
reason | String
when | UTC

    POST /appointment/schedule/:patient_id/:provider_id/:service_id/:reason_for_visit/:when HTTP/1.1
    Host: localhost:3000
    
    $ curl -X POST http://localhost:3000/appointment/schedule/1/1/1/reason/2015-12-31T19:00:00+00:00'
    
    {
      "data": {
        "errors": [],
        "appointment": {
          "id": "35484a28-e58d-43f4-bf17-222e85b81acb",
          "patientId": "1",
          "providerId": "1",
          "serviceId": "1",
          "reasonForVisit": "reason",
          "when": "2015-12-31T19:00:00+00:00"
        }
      },
      "message": "",
      "error": false
    }
