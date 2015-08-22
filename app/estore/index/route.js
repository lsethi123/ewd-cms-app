import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      products: this.store.findAll('product'),
      categories: this.store.findAll('category')
    });
  },
  setupController: function(controller, models) {
    let products = models.products;
    let categories = models.categories;

    controller.set('products', products);
    controller.set('categories', categories);
  }
});
