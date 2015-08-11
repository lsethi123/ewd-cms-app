import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((category) => {
        this.transitionToRoute('estore.products.categories.index');
      }, (error) => {
        console.log('some error happened');
      });
    }
  }
});
