import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingError: false,
  
  actions: {
    signUp: function() {
      this.get('model').save().then((user) => {
        this.transitionToRoute('login');
      }, (error) => {
        this.set('error', "Error while registering. Try again!");
        this.set('isShowingError', true);
      });
    }
  }
});
