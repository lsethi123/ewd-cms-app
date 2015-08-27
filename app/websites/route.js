import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let websites = this.store.findAll('website');
    this.controllerFor('websites.new').set('websites', websites);
    this.controllerFor('websites.show').set('websites', websites);
    return websites;
  },

  setupController: function(controller, model) {
    let websites = model;
    controller.set('websites', model);
  }
});
