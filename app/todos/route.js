import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let users = this.store.findAll('user');
    this.controllerFor('todos.new').set('users', users);
  }
});
