/**
 * Created by fourq on 11/22/15.
 */
import express from 'express';
import Appointment from '../models/Appointment';
import Payload from '../models/Payload';


let router = express.Router();

router.get('/appointment/:id', (req, res) => {
  let appointment = Appointment.find(req.params.id);
  let message = appointment ? undefined : 'Appointment not found';
  let code = appointment ? 200 : 404;

  res.status(code).json(Payload.response(appointment, message));
});

router.post('/appointment/schedule/:patient_id/:provider_id/:service_id/:reason_for_visit/:when', (req, res) => {
  let appointmentResponse = Appointment.schedule(
    req.params.patient_id,
    req.params.provider_id,
    req.params.service_id,
    req.params.reason_for_visit,
    req.params.when
  );

  let message = appointmentResponse.appointment ? undefined : 'Unable to schedule appointment';
  let code = appointmentResponse.appointment ? 200 : 404;
  let err = appointmentResponse.errors.length > 0;

  res.status(code).json(Payload.response(appointmentResponse, message, err));
});


export default router;
