import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTags: null,
  imageFiles: [],
  imagePosts: [],

  actions: {
    add: function() {
      this.set('sendingData', true);
      let tags = this.get('selectedTags');
      if(tags) {
        this.get('model').save().then((post) => {
          this.get('selectedTags').forEach((tag) => {
            this.store.findRecord('tag', tag).then((tag) => {
              let tagPost = this.store.createRecord('tag-post', {
                tag: tag,
                post: post
              });
              tagPost.save();
            });
          });
          this.get('imageFiles').forEach((imageFile) => {
            imageFile.save().then((image) => {
              let imagePost = this.store.createRecord('image-post', {
                image: image,
                post: post
              });
              imagePost.save();
            });
          });
          this.set('imageFiles', []);
          this.set('imagePosts', []);
          this.set('sendingData', false);
          this.set('selectedTags', null);
          this.transitionToRoute('blog.posts.show', post);
          this.get('flashMessages').success('Successfully created a Post!');
        });
      } else {
        this.get('model').save().then((post) => {
          this.set('sendingData', false);
          this.set('imageFiles', []);
          this.set('imagePosts', []);
          this.set('selectedTags', null);
          this.transitionToRoute('blog.posts.show', post);
        });
      }


    },

    selectTag: function(tag) {
      this.set('selectedTag', tag);
    },

    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },

    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
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
      this.send('add');
    }
  }
});
