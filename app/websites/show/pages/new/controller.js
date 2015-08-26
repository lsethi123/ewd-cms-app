import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((page) => {
        this.transitionToRoute('websites.show.pages.show', page);
        this.get('flashMessages').success('Page successfully created!');
      });
    }
  }
});
