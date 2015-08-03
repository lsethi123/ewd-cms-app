import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(user) {
      user.destroyRecord();
      return false;
    },

    edit: function(user) {
      this.transitionToRoute('users.show', user);
      this.controllerFor('users.show').set('isEditing', true);
    }
  }
});
