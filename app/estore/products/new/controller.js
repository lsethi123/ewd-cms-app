import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    add: function() {
      this.set('sendingData', true);
      let file = document.getElementById('file-field').files[0];
      this.get('model').set('image', file).save().then((product) => {
        this.set('sendingData', false);
        this.transitionToRoute('estore.products.show', product);
      });
    },

    closeModal: function() {
      window.history.back();
    }
  }
});
