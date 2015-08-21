import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({

  model: function() {
    let teams = this.store.findAll('team');
    this.controllerFor('users.show').set('teams', teams);
  }
});
