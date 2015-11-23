/**
 * Created by fourq on 11/22/15.
 */
import express from 'express';
import Service from '../models/Service';
import Payload from '../models/Payload';


let router = express.Router();

router.get('/service/:id', (req, res) => {
  let service = Service.find(req.params.id);
  let message = service ? undefined : 'Service not found';
  let code = service ? 200 : 404;

  res.status(code).json(Payload.response(service, message));
});


export default router;

