import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((product) => {
        this.transitionToRoute('estore.products.show', product);
      });
    }
  }
});
