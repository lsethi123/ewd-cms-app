import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingImagesForm: false,
  imageFiles: [],
  imageSliders: [],

  actions: {
    save: function() {
      this.set('sendingData', true);
      let page = this.get('page');
      this.get('model').set('page', page).save().then((slider) => {
        this.get('imageFiles').forEach((imageFile) => {
          imageFile.save().then((image) => {
            let imageSlider = this.store.createRecord('image-slider', {
              image: image,
              slider: slider
            });
            imageSlider.save();
          });
        });
        this.set('imageFiles', []);
        this.set('imageSliders', []);
        this.set('sendingData', false);
        this.transitionToRoute('pages.show', page);
      });
    },

    openImagesForm: function() {
      this.set('isShowingImagesForm', true);
    },

    closeModal: function() {
      this.set('isShowingImagesForm', false);
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
      this.set('isShowingImagesForm', false);
    }
    }
});
