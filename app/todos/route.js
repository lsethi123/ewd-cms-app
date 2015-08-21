import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function() {
    let users = this.store.findAll('user');
    this.controllerFor('todos.new').set('users', users);
  }
});
