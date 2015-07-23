import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(task) {
      task.destroyRecord();
      return false;
    }
  }
});
