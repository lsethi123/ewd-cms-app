import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      let tags = this.get('tags');
      let tag = this.get('selectedTag');
      this.get('model').set('tags', tags).save().then((post) => {
        this.transitionToRoute('blog.posts.show', post);
      });

    },

    selectTag: function(tag) {
      this.set('selectedTag', tag);
    }
  }
});
