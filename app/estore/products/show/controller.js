import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  selectedCategories: null,

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
    saveEditable: function() {
      this.get('model').save();
    },
    save: function() {
      this.set('sendingData', true);
      let categories = this.get('selectedCategories');
      this.get('model').save().then((product) => {

        if (categories) {
          this.get('selectedCategories').forEach((category) => {
            this.store.findRecord('category', category).then((category) => {
              let categoryProduct = this.store.createRecord('category-product', {
                category: category,
                product: product
              });
              categoryProduct.save();
            });
          });
        }
        this.set('sendingData', false);
        this.set('selectedCategories', null);
        this.set('imageFiles', []);
        this.set('imageProducts', []);
        this.set('isEditing', false);
        this.transitionToRoute('estore.products.show', product);
      });
    },

    closeModal: function() {
      this.set('isEditing', false);
    },

    uploadImages: function() {
      let files = document.getElementById('file-field').files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          let fileRecord = this.store.createRecord('image', {
            file: file
          });
          this.get('imageFiles').pushObject(fileRecord);
        }
      }
      this.send('save');
    }
  }
});
