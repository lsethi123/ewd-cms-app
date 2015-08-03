import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let product = this.store.findRecord('product', params.product_id);
    return product;
  }
});
