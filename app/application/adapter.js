import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://api.ewebdesign.co',
  /* host: 'http://localhost:3000', */
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'ETag',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
  }
});
