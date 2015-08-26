import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    add: function() {
      this.get('model').save().then((tag) => {
        this.transitionToRoute('blog.index');
        this.get('flashMessages').success('Successfully created a tag!');
      }, (error) => {
        console.log('some error happened');
      });
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
