import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      let teams = this.store.findAll('team');
      this.controllerFor('users.show').set('teams', teams);
      return this.store.findAll('user');
    }
});
