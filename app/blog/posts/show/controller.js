import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  imageFiles: [],
  imagePosts: [],
  selectedTags: null,

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
          this.set('isEditing', false);
          this.transitionToRoute('blog.posts.show', post);
        });
      } else {
        this.get('model').save().then((post) => {
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
          this.set('isEditing', false);
          this.transitionToRoute('blog.posts.show', post);
        });
      }
    },

    unpublish: function(post) {
      post.set('published', false).save().then((post) => {

      });
    },

    publish: function(post) {
      post.set('published', true).save().then((post) => {
      });
    },

    delete: function(post) {
      post.destroyRecord().then((response) => {
        this.transitionToRoute('blog.posts.show');
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
