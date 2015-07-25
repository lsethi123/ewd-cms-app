import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((tag) => {
        this.transitionToRoute('blog.tags.index');
      }, (error) => {
        console.log('some error happened');
      });
    }
  }
});
