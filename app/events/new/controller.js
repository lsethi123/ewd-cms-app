import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    add: function() {
      this.set('sendingData', true);
      let event = this.get('model');
      event.save().then((event) => {
        this.set('sendingData', false);
        this.transitionToRoute('events.index');
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
