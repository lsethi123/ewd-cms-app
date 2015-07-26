import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit: function(company) {
      this.transitionToRoute('crm.companies.show', company);
      this.controllerFor('crm.companies.show').set('isEditing', true);
    },
    delete: function(company) {
      company.destroyRecord();
      return false;
    }
  }
});
