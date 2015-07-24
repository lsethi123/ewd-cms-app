import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteOpportunity: function(opportunity) {
      opportunity.destroyRecord();
      return false;
    },

    editOpportunity: function(opportunity) {
      this.transitionToRoute('crm.companies.show.opportunities.show', opportunity);
      this.controllerFor('crm.companies.show.opportunities.show').set('isEditing', true);
    }
  }
});
