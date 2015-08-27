import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    listAll: function() {
      this.transitionToRoute('websites.index');
    },

    sortByWebsite: function(website) {
      this.transitionToRoute('websites.show', website);
    },

    delete: function(model) {
      model.destroyRecord();
      this.transitionToRoute('websites.index');
    }
  }
});
