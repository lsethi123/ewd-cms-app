import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('website');
  },

  setupController: function(controller, model) {
    let websites = model;
    controller.set('websites', model);
  }
});
