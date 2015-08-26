import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((category) => {
        this.transitionToRoute('estore.index');
        this.get('flashMessages').success('Successfully created a product category!');
      }, (error) => {
        console.log('some error happened');
      });
    },
    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },
    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    }
  }
});
