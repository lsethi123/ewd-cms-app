import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.set('sendingData', true);
      this.get('model').save().then((team) => {
        this.set('sendingData', false);
        this.transitionToRoute('teams.show', team);
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
