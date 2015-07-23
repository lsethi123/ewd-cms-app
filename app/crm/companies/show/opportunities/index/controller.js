import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteOpportunity: function(opportunity) {
      opportunity.destroyRecord();
      return false;
    }
  }
});
