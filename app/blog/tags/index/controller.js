import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(tag) {
      tag.destroyRecord();
      return false;
    }
  }
});
