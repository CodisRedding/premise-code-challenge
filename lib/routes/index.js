/**
 * Created by fourq on 11/21/15.
 */
import express from 'express';
import appointment from './appointment';
import service from './service';
import patient from './patient';
import provider from './provider';


let router = express.Router();

router.use(appointment);
router.use(service);
router.use(patient);
router.use(provider);


export default router;
