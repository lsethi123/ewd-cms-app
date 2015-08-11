import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('product');
  },

  afterModel: function() {
    return this.store.findAll('category');
  },

  setupController: function(controller, model) {
    controller.setProperties({
      model: model,
      categories: this.store.peekAll('category')
    });
  }
});
