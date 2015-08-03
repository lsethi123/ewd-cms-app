import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      let file = document.getElementById('file-field').files[0];
      this.get('model').set('image', file).save().then((product) => {
        this.transitionToRoute('estore.products.show', product);
      });
    }
  }
});
