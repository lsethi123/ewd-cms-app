import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    let user = this.store.findRecord('user', this.get('session.secure.id'));
    this.controllerFor('events.index').set('currentUser', user);
    return this.store.findAll('event');
  }
});
