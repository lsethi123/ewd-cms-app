import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signUp: function() {
      this.get('model').save().then((user) => {
        this.transitionToRoute('login');
      }, (error) => {
        console.log('error while registering!');
      });
    }
  }
});
