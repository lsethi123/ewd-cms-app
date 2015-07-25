import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit: function(post) {
      this.transitionToRoute('blog.posts.show', post);
      this.controllerFor('blog.posts.show').set('isEditing', true);
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
      post.destroyRecord();
      return false;
    }
  }
});
