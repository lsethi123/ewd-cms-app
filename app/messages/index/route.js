import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    let messages = this.store.findAll('message')
    return messages;
  },

  afterModel: function() {
    let user = this.store.findRecord('user', this.get('session.secure.id'));
    this.controllerFor('messages.index').set('user', user);
  }

});
