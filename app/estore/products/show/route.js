import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let product = this.store.findRecord('product', params.product_id);
    return product;
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
