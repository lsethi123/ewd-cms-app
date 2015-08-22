import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit: function(product) {
      this.controllerFor('estore.products.show').set('isEditing', true);
      this.transitionToRoute('estore.products.show', product);
    },
    delete: function(product) {
      product.destroyRecord();
      return false;
    }
  }
});
