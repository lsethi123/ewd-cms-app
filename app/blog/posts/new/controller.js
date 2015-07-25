import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((post) => {
        this.transitionToRoute('blog.posts.show', post);
      }, (error) => {
        console.log('some error happened');
      });
    }
  }
});
