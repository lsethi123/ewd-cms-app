import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let company = this.controllerFor('crm.companies.show.tasks').get('company');
    return this.store.query('task', { company_id: company } );
  }
});
