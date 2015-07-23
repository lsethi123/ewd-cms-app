import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let company = this.controllerFor('crm.companies.show.employees').get('company');
    return this.store.query('employee', { company_id: company } );
  }
});
