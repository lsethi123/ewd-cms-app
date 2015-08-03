import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(team) {
      team.destroyRecord();
      return false;
    },

    edit: function(team) {
      this.transitionToRoute('teams.show', team);
      this.controllerFor('teams.show').set('isEditing', true);
    }
  }
});
