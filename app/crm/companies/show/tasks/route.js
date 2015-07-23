import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let company = this.modelFor('crm.companies.show');
    let employees = this.store.query('employee', { company_id: company.get('id') } );
    this.controllerFor('crm.companies.show.tasks.new').set('company', company);
    this.controllerFor('crm.companies.show.tasks.new').set('employees', employees);
    this.controllerFor('crm.companies.show.tasks.show').set('employees', employees);
    this.controllerFor('crm.companies.show.tasks').set('company', company.get('id'));
    return company;
  }
});
