/**
 * Created by fourq on 11/21/15.
 */
import http from 'http';
import app from './app';
import data from './fixtures/data';


app.server = http.createServer(app);

app.server.listen(3000, () => {
  let port = app.server.address().port;

  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('listening on port', port);
});
