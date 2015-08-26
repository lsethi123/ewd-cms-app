import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.set('sendingData', true);
      this.get('model').save().then((board) => {
        this.set('sendingData', false);
        this.transitionToRoute('todos.index');
        this.get('flashMessages').success('Board has successfully been created');
      });
    },

    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    }
  }
});
