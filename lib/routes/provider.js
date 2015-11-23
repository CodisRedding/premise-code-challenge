/**
 * Created by fourq on 11/22/15.
 */
import express from 'express';
import Provider from '../models/Provider';
import Payload from '../models/Payload';


let router = express.Router();

router.get('/provider/:id', (req, res) => {
  let provider = Provider.find(req.params.id);
  let message = provider ? undefined : 'Provider not found';
  let code = provider ? 200 : 404;

  res.status(code).json(Payload.response(provider, message));
});


export default router;
