import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let company = this.modelFor('crm.companies.show');
    this.controllerFor('crm.companies.show.opportunities.new').set('company', company);
    this.controllerFor('crm.companies.show.opportunities').set('company', company.get('id'));
    return company;
  }
});
