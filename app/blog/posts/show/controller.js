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
      this.get('model').save().then((post) => {
        this.toggleProperty('isEditing');
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
        this.transitionToRoute('blog.posts.index');
      });
    }
  }
});
