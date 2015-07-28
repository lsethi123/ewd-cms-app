import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(product) {
      product.destroyRecord();
      return false;
    },

    edit: function(product) {
      this.transitionToRoute('estore.products.show', product);
      this.controllerFor('estore.products.show').set('isEditing', true);
    }
  }
});
