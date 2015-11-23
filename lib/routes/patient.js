/**
 * Created by fourq on 11/22/15.
 */
import express from 'express';
import Patient from '../models/Patient';
import Payload from '../models/Payload';


let router = express.Router();

router.get('/patient/:id', (req, res) => {
  let patient = Patient.find(req.params.id);
  let message = patient ? undefined : 'Patient not found';
  let code = patient ? 200 : 404;

  res.status(code).json(Payload.response(patient, message));
});


export default router;
