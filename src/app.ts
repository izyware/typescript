import izyBoostrap from './bootstrap';
import * as serviceComposeJSON from './service-compose.json';
import sessionService from './service/session';

const start = () => izyBoostrap.bootstrap({
  entrypoint: sessionService.entrypoint,
  serviceComposeJSON
});

start();
