import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    logIn: function() {
      let userEmail = this.get('identification');
      let userPassword = this.get('password');
      let options = {
        identification: userEmail,
        password: userPassword
      };

      this.get('session').authenticate('authenticator:ewd-cms', options).then(function() {

      }, function() {

      });
    },

    signUp: function() {
      this.transitionToRoute('signup');
    }

  }
});
