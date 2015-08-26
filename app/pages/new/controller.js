import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.set('sendingData', true);
      this.get('model').save().then((page) => {
        this.set('sendingData', false);
        this.transitionToRoute('pages.show', page);
        this.get('flashMessages').success('Successfully created a Page!');
      });
    },

    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    }
  }
});
