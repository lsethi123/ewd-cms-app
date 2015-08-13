import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  // host: 'http://hcr.ewebdesign.co',
  host: 'http://localhost:3000', 

  namespace: 'api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'ETag',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
  }
});
