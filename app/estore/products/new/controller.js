import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCategories: null,
  imageFiles: [],

  actions: {
    add: function() {
      this.set('sendingData', true);
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
      let categories = this.get('selectedCategories');
      this.get('model').save().then((product) => {
        this.get('imageFiles').forEach((imageFile) => {
          imageFile.save().then((image) => {
            let imageProduct = this.store.createRecord('image-product', {
              image: image,
              product: product
            });
            imageProduct.save();
          });
        });

        this.get('selectedCategories').forEach((category) => {
          this.store.findRecord('category', category).then((category) => {
            let categoryProduct = this.store.createRecord('category-product', {
              category: category,
              product: product
            });
            categoryProduct.save();
          });
        });
        this.set('sendingData', false);
        this.set('selectedCategories', null);
        this.set('imageFiles', []);
        this.transitionToRoute('estore.products.show', product);
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
