import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.set('sendingData', true);
      this.get('model').save().then((board) => {
        this.set('sendingData', false);
        this.transitionToRoute('todos.boards.show', board);
      });
    },

    cancel: function() {
      window.history.back();
    },

    closeModal: function() {
      window.history.back();
    },
  }
});