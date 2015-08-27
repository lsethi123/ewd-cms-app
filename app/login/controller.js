import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingError: false,

  actions: {

    logIn: function() {
      let userEmail = this.get('identification');
      let userPassword = this.get('password');
      let options = {
        identification: userEmail,
        password: userPassword
      };

      this.get('session').authenticate('authenticator:ewd-cms', options).then((login) => {
        this.transitionToRoute('index');
      }, (error) => {
        this.set('error', "Email or password are invalid. Try again.");
        this.set('isShowingError', true);
      });
    },

    signUp: function() {
      this.transitionToRoute('signup');
    }

  }
});
