import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('company');
  },

  actions: {
    // fix that only deletes empty record
    /*
    willTransition: function() {
      this.modelFor('crm.companies.new').destroyRecord();
      return false;
    }
    */
  }
});
