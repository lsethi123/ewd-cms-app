import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  willTransition: function() {
    this.controllerFor('signup').set('error', null);
    this.controllerFor('signup').set('isShowingError', false);
  }
});
