import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((team) => {
        this.transitionToRoute('teams.show', team);
      });
    }
  }
});
