import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTags: null,

  actions: {
    add: function() {
      this.set('sendingData', true);
      let tags = this.get('selectedTags');
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
        this.set('sendingData', false);
        this.set('selectedTags', null);
        this.transitionToRoute('blog.posts.show', post);
      });

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
    }
  }
});
