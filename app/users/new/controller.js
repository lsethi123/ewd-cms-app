import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signUp: function() {
      this.get('model').save().then((user) => {
        this.transitionToRoute('users.index');
      }, (error) => {
        console.log('error while registering!');
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
