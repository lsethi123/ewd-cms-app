import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(category) {
      category.destroyRecord();
      return false;
    }
  }
});
