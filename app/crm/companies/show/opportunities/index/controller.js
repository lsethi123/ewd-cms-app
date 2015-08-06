import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(opportunity) {
      opportunity.destroyRecord();
      return false;
    },

    edit: function(opportunity) {
      this.transitionToRoute('crm.companies.show.opportunities.show', opportunity);
      this.controllerFor('crm.companies.show.opportunities.show').set('isEditing', true);
    }
  }
});
