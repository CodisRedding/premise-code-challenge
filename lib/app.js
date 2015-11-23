/**
 * Created by fourq on 11/21/15.
 */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);


export default app;
