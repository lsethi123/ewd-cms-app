import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
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
      let post = this.get('model');
      post.set('image', file);
      post.save().then((post) => {
        this.set('sendingData', false);
        this.set('isEditing', false);
        this.transitionToRoute('blogs.posts.show');
      }, (error) => {
        this.set('sendingData', false);
        this.set('isEditing', false);
      });
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
    }
  }
});
