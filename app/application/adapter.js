import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';

export default ActiveModelAdapter.extend({
  host: config.apiHost,
  namespace: config.apiName,

  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'ETag',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
  }
});
