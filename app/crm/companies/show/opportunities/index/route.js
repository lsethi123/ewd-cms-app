import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let company = this.controllerFor('crm.companies.show.opportunities').get('company');
    return this.store.query('opportunity', { company_id: company } );
  }
});
