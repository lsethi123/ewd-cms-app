import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    add: function() {
      this.get('model').save().then((website) => {
        this.transitionToRoute('websites.show', website);
        this.get('flashMessages').success('Website successfully created!');
      });
    },
    listAll: function() {
      this.transitionToRoute('websites.index');
    },

    sortByWebsite: function(website) {
      this.transitionToRoute('websites.show', website);
    }
  }
});
