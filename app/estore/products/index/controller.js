import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(product) {
      product.destroyRecord();
      return false;
    }
  }
});
