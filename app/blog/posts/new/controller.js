import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      let tags = this.get('tags');
      let tag = this.get('selectedTag');
      let file = document.getElementById('file-field').files[0];
      this.get('model').set('tags', tags).set('image', file).save().then((post) => {
        this.transitionToRoute('blog.posts.show', post);
      });

    },

    selectTag: function(tag) {
      this.set('selectedTag', tag);
    }
  }
});
