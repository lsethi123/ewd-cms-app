import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(order) {
      product.destroyRecord();
      return false;
    }
  }
});
