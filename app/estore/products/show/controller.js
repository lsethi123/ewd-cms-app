import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  imageUrl: function() {
    return "http://localhost:3000" + this.get('model.image');
  }.property('model'),

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    cancel: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      this.set('sendingData', true);
      let file = document.getElementById('file-field').files[0];
      let product = this.get('model');
      product.set('image', file);
      product.save().then((product) => {
        this.set('sendingData', false);
        this.set('isEditing', false);
      }, (error) => {
        this.set('sendingData', false);
        this.set('isEditing', false);
      });
    },

    closeModal: function() {
      this.set('isEditing', false);
    }
  }
});
