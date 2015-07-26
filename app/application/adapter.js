import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  // api from which app will fetch data
  host: 'http://api.ewebdesign.co'
});
